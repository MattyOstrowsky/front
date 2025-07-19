<template>
  <div class="h-full">
    <h1 class="text-3xl font-bold tracking-tight">Projekty</h1>
    <p class="text-muted-foreground mb-6">
      Grupuj i zarządzaj monitorowanymi kontrahentami w dedykowanych projektach.
    </p>
    <Card >
      <CardHeader>
        <CardTitle>Twoje projekty</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-muted-foreground">
          Wkrótce znajdziesz tutaj listę swoich projektów.
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
const { setHeader } = useHeader();
onMounted(() => {
  setHeader({ breadcrumbs: [{ label: 'Projekty' }] });
});
</script>
