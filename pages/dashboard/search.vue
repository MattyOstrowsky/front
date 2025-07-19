<template>
  <div class="flex flex-col h-full">
    <h1 class="text-3xl font-bold tracking-tight">Weryfikacja kontrahenta</h1>
    <p class="text-muted-foreground mb-6">
      Wpisz NIP, REGON lub nazwę firmy, aby rozpocząć.
    </p>
    <Card>
      <CardHeader>
        <CardTitle>Wyszukaj firmę</CardTitle>
        <CardDescription>
          asDane pobierane są w czasie rzeczywistym z oficjalnych źródeł (GUS, CEIDG, KRS).
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex flex-col sm:flex-row gap-2">
          <Input v-model="query" placeholder="NIP, REGON, nazwa..." />
          <Button @click="search">
            <Icon icon="lucide:search" class="w-4 h-4 mr-2" />
            Weryfikuj
          </Button>
        </div>
      </CardContent>
    </Card>

    <div class="mt-8">
      <!-- Tutaj pojawią się wyniki wyszukiwania -->
      <p class="text-muted-foreground">Wyniki wyszukiwania pojawią się tutaj.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Icon } from '@iconify/vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})
const { setHeader } = useHeader();
onMounted(() => {
  setHeader({ breadcrumbs: [{ label: 'Weryfikacja' }] });
});
const query = ref('')

const search = () => {
  console.log('Wyszukiwanie:', query.value)
  // Logika API
}
</script>
