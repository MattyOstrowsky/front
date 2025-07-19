<template>
  <div class="h-full">
    <h1 class="text-3xl font-bold tracking-tight">Raporty</h1>
    <p class="text-muted-foreground mb-6">
      Generuj i pobieraj szczegółowe raporty na temat zweryfikowanych firm.
    </p>
    <Card >
      <CardHeader>
        <CardTitle>Twoje raporty</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-muted-foreground">
          Wkrótce znajdziesz tutaj listę wygenerowanych raportów.
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
  setHeader({ breadcrumbs: [{ label: 'Raporty' }] });
});
</script>
