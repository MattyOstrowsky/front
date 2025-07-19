<template>
  <div class="flex h-full flex-col">
    <div>
      <h1 class="text-3xl font-bold tracking-tight">Historia weryfikacji</h1>
      <p class="text-muted-foreground mb-6">
        Przeglądaj i zarządzaj swoimi poprzednimi wyszukiwaniami.
      </p>
    </div>

    <Card class="flex flex-grow flex-col">
      <CardHeader>
        <CardTitle>Twoja historia</CardTitle>
      </CardHeader>
      <CardContent class="flex-grow">
        <p class="text-muted-foreground">
          Wkrótce znajdziesz tutaj tabelę z historią swoich weryfikacji.
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