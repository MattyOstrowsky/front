<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Ustawienia</h1>
    <Card>
      <CardHeader>
        <CardTitle>Ustawienia konta</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-gray-500">
          W przyszłości tutaj pojawią się opcje konfiguracji Twojego konta.
        </p>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})
</script>
