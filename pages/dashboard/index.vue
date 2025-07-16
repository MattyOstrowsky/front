<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Wyszukaj kontrahenta</h1>
    <Card class="max-w-2xl">
      <CardHeader>
        <CardTitle>Wprowadź NIP</CardTitle>
        <CardDescription>
          Wpisz numer NIP jednoosobowej działalności gospodarczej, którą chcesz zweryfikować.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex space-x-2">
          <Input v-model="nip" placeholder="np. 123-456-78-90" />
          <Button @click="search">
            <Icon icon="lucide:search" class="w-4 h-4 mr-2" />
            Szukaj
          </Button>
        </div>
      </CardContent>
    </Card>

    <!-- Placeholder na wyniki -->
    <div class="mt-8">
      <!-- Tutaj w przyszłości pojawią się wyniki wyszukiwania -->
      <p class="text-gray-500">Wyniki wyszukiwania pojawią się tutaj.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Icon } from '@iconify/vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

// Definiujemy, że ta strona ma używać layoutu 'dashboard'
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth' // Dodamy to później
})

const nip = ref('')

const search = () => {
  console.log('Wyszukiwanie NIP:', nip.value)
  // Tutaj w przyszłości będzie wywołanie API
}
</script>
