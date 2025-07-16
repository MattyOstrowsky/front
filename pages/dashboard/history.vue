<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Historia wyszukiwania</h1>
    <Card>
      <CardHeader>
        <CardTitle>Twoje ostatnie wyszukiwania</CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-gray-500">
          Wkrótce znajdziesz tutaj listę swoich poprzednich weryfikacji.
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
