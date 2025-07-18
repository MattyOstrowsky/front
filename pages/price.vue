<template>
  <section id="cennik" class="py-20 md:py-32 bg-background">
    <div class="container px-4 md:px-6">
      <div class="text-center space-y-4 mb-16">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Prosty cennik dla każdej firmy
        </h2>
        <p class="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Zacznij za darmo i rozwijaj się razem z nami. Wybierz plan, który najlepiej pasuje do Twoich potrzeb.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <Card class="border-2 border-primary shadow-lg flex flex-col">
          <CardHeader class="text-center">
            <CardTitle class="text-2xl">Starter</CardTitle>
            <CardDescription>Idealny na początek. Wypróbuj naszą platformę bez zobowiązań.</CardDescription>
          </CardHeader>
          <CardContent class="flex-grow space-y-6 text-center">
            <div class="text-5xl font-bold">
              0 zł
              <span class="text-xl font-normal text-muted-foreground">/ pierwszy miesiąc</span>
            </div>
            <ul class="space-y-3 text-left">
              <li class="flex items-center gap-2">
                <CheckCircle class="h-5 w-5 text-green-500" />
                <span>5 darmowych weryfikacji</span>
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="h-5 w-5 text-green-500" />
                <span>Dostęp do podstawowych danych (CEIDG, GUS)</span>
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="h-5 w-5 text-green-500" />
                <span>Zapisywanie historii wyszukiwań</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button @click="register" class="w-full text-lg py-6">
              Zacznij za darmo
            </Button>
          </CardFooter>
        </Card>

        <Card class="flex flex-col">
          <CardHeader class="text-center">
            <CardTitle class="text-2xl">PRO</CardTitle>
            <CardDescription>Dla profesjonalistów potrzebujących pełnego dostępu.</CardDescription>
          </CardHeader>
          <CardContent class="flex-grow space-y-6 text-center">
            <div class="text-5xl font-bold">
              49 zł
              <span class="text-xl font-normal text-muted-foreground">/ miesiąc</span>
            </div>
            <ul class="space-y-3 text-left">
               <li class="flex items-center gap-2">
                <CheckCircle class="h-5 w-5 text-green-500" />
                <span>Nielimitowane weryfikacje</span>
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="h-5 w-5 text-green-500" />
                <span>Pełne raporty (KRS, VIES, biała lista VAT)</span>
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="h-5 w-5 text-green-500" />
                <span>Monitoring kontrahentów</span>
              </li>
               <li class="flex items-center gap-2">
                <CheckCircle class="h-5 w-5 text-green-500" />
                <span>Eksport danych do PDF</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
             <Button @click="register" variant="outline" class="w-full text-lg py-6">
              Wybierz plan PRO
            </Button>
          </CardFooter>
        </Card>

        <Card class="flex flex-col">
          <CardHeader class="text-center">
            <CardTitle class="text-2xl">Enterprise</CardTitle>
            <CardDescription>Rozwiązania szyte na miarę dla dużych zespołów i firm.</CardDescription>
          </CardHeader>
          <CardContent class="flex-grow space-y-6 text-center">
             <div class="text-4xl font-bold pt-4">
              Wycena<br>indywidualna
            </div>
            <ul class="space-y-3 text-left">
              <li class="flex items-center gap-2">
                <CheckCircle class="h-5 w-5 text-green-500" />
                <span>Wszystko co w planie PRO</span>
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="h-5 w-5 text-green-500" />
                <span>Dostęp do API</span>
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="h-5 w-5 text-green-500" />
                <span>Integracje z systemami ERP/CRM</span>
              </li>
              <li class="flex items-center gap-2">
                <CheckCircle class="h-5 w-5 text-green-500" />
                <span>Dedykowane wsparcie techniczne</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button @click="goToContact" variant="outline" class="w-full text-lg py-6">
              Skontaktuj się z nami
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-vue-next"

definePageMeta({
  layout: 'landing'
});

const { register } = useAuth();
const goToContact = () => navigateTo('/kontakt');
</script>