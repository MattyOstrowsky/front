<template>
  <div class="min-h-screen flex flex-col items-center justify-center space-y-6 text-center">
    <div v-if="!isLoggedIn">
      <h1 class="text-4xl font-bold">Witaj w Kontrahent.io</h1>
      <p class="text-lg text-gray-600 dark:text-gray-300 mt-2">
        Zaloguj się lub zarejestruj, aby uzyskać dostęp do pulpitu weryfikacji.
      </p>
      <div class="space-x-4 mt-6">
        <Button @click="login" size="lg">
          <Icon icon="lucide:log-in" class="w-5 h-5 mr-2" />
          Login
        </Button>
        <Button @click="register" size="lg" variant="outline">
          <Icon icon="lucide:user-plus" class="w-5 h-5 mr-2" />
          Register
        </Button>
      </div>
    </div>
    <div v-else>
      <p class="text-lg font-semibold">Jesteś zalogowany. Przekierowywanie do pulpitu...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'

const { isLoggedIn, login, register } = useAuth()

watch(isLoggedIn, (newValue) => {
  if (newValue) {
    navigateTo('/dashboard')
  }
}, { immediate: true })
</script>