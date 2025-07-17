<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Dokumenty i regulaminy</h1>
    <Card class="max-w-2xl">
      <CardHeader>
        <CardTitle>Ważne informacje</CardTitle>
        <CardDescription>
          Zapoznaj się z naszymi zasadami i polityką prywatności.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul class="space-y-2">
          <li>
            <NuxtLink to="/privacy-policy" target="_blank" class="text-primary underline-offset-4 hover:underline">
              Polityka Prywatności
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/terms-of-service" target="_blank" class="text-primary underline-offset-4 hover:underline">
              Regulamin korzystania z usługi
            </NuxtLink>
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; //

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})
</script>