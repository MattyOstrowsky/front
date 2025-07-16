import { navigateTo, useRuntimeConfig, useCookie, useState } from '#app'

interface User {
  sub: string
  name?: string
  email?: string
  picture?: string
}

export const useAuth = () => {
  const config = useRuntimeConfig()
  const token = useCookie<string | null>('auth_token', { sameSite: 'lax', secure: true })
  const idToken = useCookie<string | null>('auth_id_token', { sameSite: 'lax', secure: true })
  
  const user = useState<User | null>('user', () => null)
  const isLoggedIn = computed(() => !!token.value)

  const generateAndStorePKCE = async () => {
    const { generatePKCEPair } = await import('@/utils/pkce')
    const { code_verifier, code_challenge } = await generatePKCEPair()
    if (process.client) {
      sessionStorage.setItem('pkce_verifier', code_verifier)
    }
    return { code_challenge }
  }

  const redirectToLogin = async (prompt?: 'create') => {
    const { code_challenge } = await generateAndStorePKCE()
    
    const params = new URLSearchParams({
      client_id: config.public.clientId,
      redirect_uri: config.public.redirectUri,
      response_type: 'code',
      scope: 'openid profile email',
      code_challenge,
      code_challenge_method: 'S256',
    })

    if (prompt) {
      params.append('prompt', prompt)
    }

    if (process.client) {
      window.location.href = `${config.public.authUrl}/oauth/v2/authorize?${params}`
    }
  }

  const handleCallback = async (code: string) => {
    if (!process.client) return

    const code_verifier = sessionStorage.getItem('pkce_verifier')
    if (!code_verifier) {
      console.error('Brak PKCE verifier w sesji.')
      return navigateTo('/')
    }

    try {
      const response = await $fetch<{ access_token: string, id_token: string }>(
        `${config.public.authUrl}/oauth/v2/token`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: config.public.clientId,
            redirect_uri: config.public.redirectUri,
            code,
            code_verifier,
          }),
        }
      )
      
      token.value = response.access_token
      idToken.value = response.id_token

      await fetchUser()

      sessionStorage.removeItem('pkce_verifier')
      navigateTo('/dashboard')
    } catch (e) {
      console.error('Błąd podczas wymiany kodu na token:', e)
      await logout()
    }
  }

  const fetchUser = async () => {
    if (!token.value) return

    try {
      const userInfo = await $fetch<User>(`${config.public.authUrl}/oidc/v1/userinfo`, {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      })
      user.value = userInfo
    } catch (e) {
      console.error('Błąd podczas pobierania danych użytkownika:', e)
      await logout()
    }
  }

  const logout = async () => {
    const postLogoutRedirectUri = `${window.location.origin}/logout`
    const idTokenHint = idToken.value

    token.value = null
    user.value = null
    idToken.value = null
    
    if (process.client) {
      const params = new URLSearchParams({
        id_token_hint: idTokenHint || '',
        post_logout_redirect_uri: postLogoutRedirectUri,
      })
      window.location.href = `${config.public.authUrl}/oidc/v1/end_session?${params}`
    }
  }
  
  const initAuth = async () => {
    if (isLoggedIn.value && !user.value) {
      await fetchUser()
    }
  }

  const goToDashboard = () => navigateTo('/dashboard')
  const goToSettings = () => navigateTo('/settings')

  return {
    user,
    isLoggedIn,
    login: () => redirectToLogin(),
    register: () => redirectToLogin('create'),
    handleCallback,
    logout,
    initAuth,
    goToDashboard,
    goToSettings,
  }
}