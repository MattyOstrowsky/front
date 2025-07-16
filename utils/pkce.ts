// utils/pkce.ts
export function randomString(length = 64) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~'
  const random = crypto.getRandomValues(new Uint8Array(length))
  return Array.from(random).map(b => charset[b % charset.length]).join('')
}

export async function sha256(buffer: string) {
  const data = new TextEncoder().encode(buffer)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return new Uint8Array(hash)
}

export function base64UrlEncode(buffer: Uint8Array) {
  return btoa(String.fromCharCode(...buffer))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

export async function generatePKCEPair() {
  const code_verifier = randomString(64)
  const hashed = await sha256(code_verifier)
  const code_challenge = base64UrlEncode(hashed)
  return { code_verifier, code_challenge }
}
