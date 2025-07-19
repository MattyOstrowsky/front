<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-3xl font-bold tracking-tight">Przegląd</h1>
      <p class="text-muted-foreground">
        Przegląd aktywności i szybki dostęp do funkcji weryfikacji kontrahentów.
      </p>
    </div>

    <!-- Stats Cards -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium">Weryfikacje w tym miesiącu</CardTitle>
          <Icon icon="lucide:search" class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">124</div>
          <p class="text-xs text-muted-foreground">+20.1% od ostatniego miesiąca</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium">Aktywne alerty</CardTitle>
          <Icon icon="lucide:bell-ring" class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">3</div>
          <p class="text-xs text-muted-foreground">Kontrahenci z nowymi zdarzeniami</p>
        </CardContent>
      </Card>
      <!-- Można dodać więcej kart -->
    </div>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card class="col-span-4">
        <CardHeader>
          <CardTitle>Aktywność</CardTitle>
        </CardHeader>
        <CardContent class="pl-2">
          <!-- Placeholder for a chart -->
          <img src="https://placehold.co/800x350/e2e8f0/334155?text=Wykres+Aktywności" alt="Wykres aktywności" class="w-full h-auto" />
        </CardContent>
      </Card>
      <Card class="col-span-3 bg-gradient-to-b from-card to-muted/80">
        <CardHeader>
          <CardTitle>Ostatnie weryfikacje</CardTitle>
          <CardDescription>Ostatnie 5 wyszukanych przez Ciebie firm.</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div v-for="i in 5" :key="i" class="flex items-center">
              <div class="ml-4 space-y-1">
                <p class="text-sm font-medium leading-none">Firma Przykładowa {{ i }}</p>
                <p class="text-sm text-muted-foreground">NIP: 123-456-78-9{{ i }}</p>
              </div>
              <div class="ml-auto font-medium text-sm text-muted-foreground">2 dni temu</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
});
const { setHeader } = useHeader();
onMounted(() => {
  setHeader({ breadcrumbs: [{ label: 'Przegląd' }] });
});
</script>
