<template>
  <div>
    <Card class="max-w-3xl">
      <CardHeader>
        <CardTitle>Wyszukaj firmę</CardTitle>
        <CardDescription>
          Dane pobierane są w czasie rzeczywistym z oficjalnych źródeł (GUS, CEIDG, KRS).
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
      <p class="text-muted-foreground">Wyniki wyszukiwania pojawią się tutaj.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Icon } from '@iconify/vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useHeader, type BreadcrumbItem } from '~/composables/useHeader'

definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

const { setHeader } = useHeader()

onMounted(() => {
  setHeader({
    title: 'Weryfikacja Kontrahenta',
    breadcrumbs: [
      { label: 'Weryfikacja' } // Ostatni element nie potrzebuje `to`
    ]
  })
})

const query = ref('')
const search = () => {
  console.log('Wyszukiwanie:', query.value)
}
</script>