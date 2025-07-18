<template>
  <section id="contact-form" class="py-20 md:py-32 bg-background">
    <div class="container px-4 md:px-6">
      <div class="max-w-2xl mx-auto">
        <Card>
          <CardHeader class="text-center">
            <CardTitle class="text-3xl">Skontaktuj się z nami</CardTitle>
            <CardDescription>
              Masz pytania lub potrzebujesz pomocy? Wypełnij formularz, a my odezwiemy się najszybciej jak to możliwe.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="space-y-2">
                <Label for="name">Imię i nazwisko</Label>
                <Input id="name" type="text" placeholder="Jan Kowalski" required v-model="form.name" />
              </div>
              <div class="space-y-2">
                <Label for="email">Adres e-mail</Label>
                <Input id="email" type="email" placeholder="jan.kowalski@example.com" required v-model="form.email" />
              </div>
              <div class="space-y-2">
                <Label for="message">Wiadomość</Label>
                <Textarea id="message" placeholder="Twoja wiadomość..." required v-model="form.message" class="min-h-[150px]" />
              </div>
               <Button type="submit" class="w-full text-lg py-6">
                Wyślij wiadomość
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea" // Pamiętaj o dodaniu tego komponentu

definePageMeta({
  layout: 'landing'
});

const form = ref({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  console.log('Dane formularza:', form.value);
  // Tutaj w przyszłości będzie logika wysyłania formularza
  alert('Dziękujemy za wiadomość! (Funkcjonalność w trakcie budowy)');
  form.value = { name: '', email: '', message: '' }; // Resetowanie formularza
};
</script>