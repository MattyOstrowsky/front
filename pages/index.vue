<template>
  <div class="min-h-screen flex flex-col items-center justify-center space-y-6 text-center">
    <!-- Widok dla niezalogowanych użytkowników -->
    <div v-if="!isLoggedIn">
      <h1 class="text-4xl font-bold">Witaj w Kontrahent.io</h1>
      <p class="text-lg text-gray-600 dark:text-gray-300 mt-2">
        Zaloguj się, aby uzyskać dostęp do pulpitu weryfikacji.
      </p>
      <Button @click="login" class="mt-6" size="lg">
        <Icon icon="lucide:log-in" class="w-5 h-5 mr-2" />
        Zaloguj się
      </Button>
    </div>
    <!-- Widok pokazywany na chwilę podczas sprawdzania statusu i przekierowania -->
    <div v-else>
      <p class="text-lg font-semibold">Jesteś zalogowany. Przekierowywanie do pulpitu...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'

const { isLoggedIn, login } = useAuth()

// Używamy `watch`, aby zareagować, gdy tylko stan `isLoggedIn` zmieni się na `true`
watch(isLoggedIn, (newValue) => {
  if (newValue) {
    navigateTo('/dashboard')
  }
}, { immediate: true }) // `immediate: true` sprawia, że funkcja wykona się od razu po załadowaniu

</script>
