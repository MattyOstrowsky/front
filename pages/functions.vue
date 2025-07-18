<template>
  <div class="bg-background text-foreground">
    <!-- Hero Section for Features -->
    <section class="py-20 md:py-32 bg-muted/50">
      <div class="container px-4 md:px-6 text-center">
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Wszystko, czego potrzebujesz do <span class="text-primary">pełnej weryfikacji</span>
        </h1>
        <p class="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
          Nasze narzędzia dostarczają kompleksowych danych z wielu źródeł w jednym miejscu, pozwalając Ci podejmować bezpieczne i świadome decyzje biznesowe.
        </p>
      </div>
    </section>

    <!-- Detailed Features Section -->
    <section class="py-20 md:py-32">
      <div class="container px-4 md:px-6 space-y-24">

        <!-- Feature 1: Status Prawny -->
        <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div class="space-y-4">
            <Badge variant="outline">Dane Rejestrowe</Badge>
            <h2 class="text-3xl font-bold tracking-tight">Weryfikacja statusu prawnego i danych z KRS</h2>
            <p class="text-muted-foreground text-lg">
              Błyskawicznie sprawdź, czy Twój przyszły partner biznesowy jest aktywnie działającą firmą. Uzyskaj dostęp do kluczowych informacji z oficjalnych rejestrów, takich jak CEIDG, GUS i KRS. Zweryfikuj dane adresowe, numery identyfikacyjne oraz dowiedz się, czy firma nie jest w trakcie likwidacji lub upadłości.
            </p>
          </div>
          <div class="relative">
             <img
                src="https://placehold.co/600x450/e2e8f0/334155?text=Dane+z+KRS"
                alt="Wizualizacja danych prawnych firmy"
                width="600"
                height="450"
                class="rounded-lg w-full h-auto shadow-lg"
              />
          </div>
        </div>

        <!-- Feature 2: Weryfikacja VAT -->
        <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
           <div class="relative lg:order-last">
             <img
                src="https://placehold.co/600x450/e2e8f0/334155?text=Biała+Lista+VAT"
                alt="Wizualizacja weryfikacji VAT"
                width="600"
                height="450"
                class="rounded-lg w-full h-auto shadow-lg"
              />
          </div>
          <div class="space-y-4">
            <Badge variant="outline">Podatki</Badge>
            <h2 class="text-3xl font-bold tracking-tight">Sprawdzenie statusu VAT i białej listy</h2>
            <p class="text-muted-foreground text-lg">
              Zabezpiecz swoje finanse, upewniając się, że kontrahent jest czynnym podatnikiem VAT. Nasze narzędzie automatycznie weryfikuje status firmy w rejestrze VAT oraz sprawdza, czy jej rachunek bankowy znajduje się na oficjalnej białej liście podatników. Uniknij ryzyka i problemów z Urzędem Skarbowym.
            </p>
          </div>
        </div>

        <!-- Feature 3: Powiązania Kapitałowe -->
        <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div class="space-y-4">
            <Badge variant="outline">Struktura Firmy</Badge>
            <h2 class="text-3xl font-bold tracking-tight">Analiza powiązań kapitałowych i osobowych</h2>
            <p class="text-muted-foreground text-lg">
              Odkryj ukrytą sieć powiązań Twojego kontrahenta. Przedstawiamy czytelne grafy pokazujące strukturę właścicielską, zarząd oraz powiązania z innymi podmiotami gospodarczymi. Zidentyfikuj potencjalne konflikty interesów i zrozum, z kim naprawdę robisz interesy.
            </p>
          </div>
           <div class="relative">
             <img
                src="https://placehold.co/600x450/e2e8f0/334155?text=Graf+Powiązań"
                alt="Wizualizacja powiązań kapitałowych"
                width="600"
                height="450"
                class="rounded-lg w-full h-auto shadow-lg"
              />
          </div>
        </div>

         <!-- Feature 4: Ostrzeżenia i Ryzyka -->
        <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
           <div class="relative lg:order-last">
             <img
                src="https://placehold.co/600x450/e2e8f0/334155?text=Alerty+i+Ryzyka"
                alt="Wizualizacja alertów o ryzyku"
                width="600"
                height="450"
                class="rounded-lg w-full h-auto shadow-lg"
              />
          </div>
          <div class="space-y-4">
            <Badge variant="outline">Bezpieczeństwo</Badge>
            <h2 class="text-3xl font-bold tracking-tight">Monitoring ostrzeżeń i sygnałów ryzyka</h2>
            <p class="text-muted-foreground text-lg">
             Bądź o krok przed problemami. Nasz system monitoruje publiczne rejestry w poszukiwaniu negatywnych sygnałów, takich jak postępowania sądowe, egzekucje komornicze czy wpisy na listach dłużników. Otrzymuj alerty i podejmuj działania, zanim będzie za późno.
            </p>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Badge } from "@/components/ui/badge"

definePageMeta({
  layout: 'landing'
});
</script>
