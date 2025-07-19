<template>
  <div class="space-y-6">
    <div class="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Profil</CardTitle>
          <CardDescription>
            Tutaj możesz zaktualizować swoje dane osobowe.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form @submit.prevent="updateProfile" class="space-y-6">
            <div class="flex items-center gap-6">
              <div class="flex flex-col items-center gap-2">
                 <span class="relative flex h-24 w-24 shrink-0 overflow-hidden rounded-full">
                    <img class="aspect-square h-full w-full" alt="@radix-vue" :src="user?.picture || 'https://placehold.co/96x96/e2e8f0/64748b?text=Avatar'">
                 </span>
                 <Button type="button" variant="outline" size="sm">Zmień</Button>
              </div>
              
              <div class="grid gap-4 flex-grow">
                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <Label for="name">Imię i nazwisko</Label>
                    <Input id="name" v-model="form.name" placeholder="np. Jan Kowalski" />
                  </div>
                </div>
                <div class="space-y-2">
                  <Label for="email">Adres e-mail</Label>
                  <Input id="email" type="email" :model-value="user?.email" disabled placeholder="email@example.com" />
                  <p class="text-xs text-muted-foreground">
                    Zmiana adresu e-mail wymaga kontaktu z pomocą techniczną.
                  </p>
                </div>
              </div>
            </div>

            <div class="flex justify-end">
              <Button type="submit">Zapisz zmiany</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card class="border-destructive">
        <CardHeader>
          <CardTitle class="text-destructive">Strefa Zagrożenia</CardTitle>
          <CardDescription>
            Poniższe akcje są nieodwracalne. Prosimy o ostrożność.
          </CardDescription>
        </CardHeader>
        <CardContent class="flex items-center justify-between">
          <div>
            <p class="font-medium">Usuń konto</p>
            <p class="text-sm text-muted-foreground">Trwałe usunięcie Twojego konta i wszystkich powiązanych danych.</p>
          </div>
          <Button variant="destructive">Usuń konto</Button>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useHeader } from '~/composables/useHeader';
import { useAuth } from '~/composables/useAuth';

definePageMeta({
  layout: 'settings',
  middleware: 'auth'
});

const { setHeader } = useHeader();
const { user } = useAuth();

// Stan formularza, inicjalizowany pustymi wartościami
const form = ref({
  name: '',
});

// Kiedy dane użytkownika się załadują, zaktualizuj formularz
watch(user, (newValue) => {
  if (newValue) {
    form.value.name = newValue.name || '';
  }
}, { immediate: true });


onMounted(() => {
  setHeader({ breadcrumbs: [{ label: 'Profil' }] });
});

const updateProfile = () => {
  console.log('Aktualizacja profilu:', form.value);
  // Tutaj w przyszłości wywołasz API do zapisu zmian w backendzie
  alert('Profil zaktualizowany! (Logika backendu do podpięcia)');
};
</script>