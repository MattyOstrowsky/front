<template>
  <div class="flex flex-col h-full">
    <h1 class="text-3xl font-bold tracking-tight">Alerty</h1>
    <p class="text-muted-foreground mb-6">
      Przeglądaj najnowsze powiadomienia o zmianach u Twoich kontrahentów.
    </p>
    <Card class="h-full">
      <CardHeader>
        <CardTitle>Aktywne alerty</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-muted-foreground">
          Wkrótce znajdziesz tutaj listę alertów.
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
