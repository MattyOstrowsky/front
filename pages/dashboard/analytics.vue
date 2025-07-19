<template>
  <div>
    <h1 class="text-3xl font-bold tracking-tight">Analityka</h1>
    <p class="text-muted-foreground mb-6">
      Szczegółowe statystyki i trendy dotyczące Twoich weryfikacji.
    </p>
    <Card>
      <CardHeader>
        <CardTitle>Statystyki</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-muted-foreground">
          Wkrótce znajdziesz tutaj zaawansowane wykresy i analizy.
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
  setHeader({ breadcrumbs: [{ label: 'Statystyki' }] });
});
</script>
