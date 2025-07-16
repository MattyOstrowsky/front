export default defineNuxtRouteMiddleware((to, from) => {
  // Pobieramy stan zalogowania z naszego composable
  const { isLoggedIn } = useAuth()

  // Jeśli użytkownik nie jest zalogowany, przekierowujemy go na stronę główną
  if (!isLoggedIn.value) {
    // Możesz tutaj dodać logikę, np. zapisując stronę, na którą użytkownik chciał wejść,
    // aby go tam przekierować po zalogowaniu.
    return navigateTo('/')
  }
})
