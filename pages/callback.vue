<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <p class="text-lg font-semibold">Przetwarzanie logowania...</p>
      <p class="text-sm text-gray-500">Proszę czekać, za chwilę zostaniesz przekierowany.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

definePageMeta({
  layout: 'landing'
});

// Używamy naszego composable
const { handleCallback } = useAuth()
const route = useRoute()

onMounted(async () => {
  const code = route.query.code as string | undefined
  
  if (code) {
    // Wywołujemy funkcję, która wymieni kod na token i zapisze go
    await handleCallback(code)
  } else {
    // Jeśli nie ma kodu, może to być błąd
    console.error('Brak kodu autoryzacyjnego w adresie URL.')
    // Można tu dodać przekierowanie na stronę błędu lub główną
    navigateTo('/')
  }
})
</script>
