<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Powiadomienia</h1>
    <Card class="max-w-2xl">
      <CardHeader>
        <CardTitle>Ustawienia powiadomień</CardTitle>
        <CardDescription>
          Zarządzaj sposobem, w jaki otrzymujesz od nas informacje.
        </CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="flex items-center justify-between space-x-4 rounded-md border p-4">
          <div class="flex flex-col">
            <Label for="email-newsletter">Biuletyn e-mail</Label>
            <span class="text-sm text-muted-foreground">
              Otrzymuj informacje o nowościach i aktualizacjach produktu.
            </span>
          </div>
          <Switch id="email-newsletter" />
        </div>
        <div class="flex items-center justify-between space-x-4 rounded-md border p-4">
           <div class="flex flex-col">
            <Label for="monitoring-alerts">Alerty o firmach</Label>
            <span class="text-sm text-muted-foreground">
              Powiadomienia o zmianach w statusie monitorowanych kontrahentów.
            </span>
          </div>
          <Switch id="monitoring-alerts" />
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; //
import { Switch } from '@/components/ui/switch'; // Musimy dodać ten komponent
import { Label } from '@/components/ui/label';   // Musimy dodać ten komponent

definePageMeta({
  layout: 'settings',
  middleware: 'auth'
})
</script>