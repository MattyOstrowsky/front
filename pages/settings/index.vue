<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Ustawienia ogólne</h1>
    <Card class="max-w-2xl">
      <CardHeader>
        <CardTitle>Główne ustawienia aplikacji</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-gray-500">
          Wkrótce pojawią się tutaj opcje konfiguracji Twojego konta i aplikacji.
        </p>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; //

definePageMeta({
  layout: 'settings',
  middleware: 'auth'
})
</script>