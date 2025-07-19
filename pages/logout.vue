<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center space-y-4 p-4">
    <h1 class="text-2xl font-bold">Zostałeś pomyślnie wylogowany.</h1>
    <p class="text-gray-600 dark:text-gray-300">Możesz teraz bezpiecznie zamknąć tę stronę.</p>
    <Button as-child>
      <NuxtLink to="/">Wróć na stronę główną</NuxtLink>
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

definePageMeta({
  layout: 'landing'
});

</script>
