<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 md:py-32 bg-gradient-to-br from-muted/50 to-accent/50">
      <div class="container px-4 md:px-6">
        <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div class="space-y-8">
            <div class="space-y-4">
              <Badge variant="secondary" class="w-fit animate-fade-in">
                🛡️ Bezpieczne transakcje biznesowe
              </Badge>
              <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
                Sprawdź
                <span class="text-primary"> kontrahentów</span>
                <br />
                zanim podpiszesz umowę
              </h1>
              <p class="text-xl text-muted-foreground max-w-[600px] animate-fade-in-up">
                Weryfikuj legalność i wiarygodność swoich partnerów biznesowych w kilka sekund. Chroń swoją firmę
                przed nieuczciwymi kontrahentami i oszustwami.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Button @click="login" size="lg" class="text-lg px-8 py-6">
                Sprawdź kontrahenta
                <ArrowRight class="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" class="text-lg px-8 py-6 bg-transparent">
                Zobacz demo
              </Button>
            </div>

            <div class="flex items-center space-x-8 text-sm text-muted-foreground animate-fade-in-up">
              <div class="flex items-center space-x-2">
                <CheckCircle class="h-4 w-4 text-green-500" />
                <span>Darmowe sprawdzenie</span>
              </div>
              <div class="flex items-center space-x-2">
                <CheckCircle class="h-4 w-4 text-green-500" />
                <span>Aktualne dane</span>
              </div>
              <div class="flex items-center space-x-2">
                <CheckCircle class="h-4 w-4 text-green-500" />
                <span>Raport w 30 sekund</span>
              </div>
            </div>
          </div>

          <div class="relative animate-fade-in-right">
            <Card class="p-6 shadow-2xl">
              <CardHeader>
                <CardTitle>Panel weryfikacji</CardTitle>
                <CardDescription>Sprawdź kontrahenta w kilka sekund</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://placehold.co/600x400/e2e8f0/e2e8f0?text=Panel+Aplikacji"
                  alt="Panel weryfikacji kontrahentów"
                  width="600"
                  height="400"
                  class="rounded-lg w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Search Section -->
    <section class="py-16 bg-background">
      <div class="container px-4 md:px-6">
        <div class="max-w-4xl mx-auto text-center space-y-8">
          <h2 class="text-2xl font-bold">Sprawdź kontrahenta już teraz</h2>
          <Card class="p-6">
            <div class="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div class="flex-1">
                <Input type="text" placeholder="Wpisz NIP, REGON lub nazwę firmy..." class="text-lg py-6" />
              </div>
              <Button size="lg" class="px-8 py-6" @click="login">
                <Search class="mr-2 h-5 w-5" />
                Sprawdź
              </Button>
            </div>
            <p class="text-sm text-muted-foreground mt-4">
              Przykład: 1234567890, 123456789, "Firma ABC Sp. z o.o."
            </p>
          </Card>
        </div>
      </div>
    </section>

     <!-- Features Section -->
    <section id="funkcje" class="py-20 md:py-32 bg-muted/30">
      <div class="container px-4 md:px-6">
        <div class="text-center space-y-4 mb-16">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Kompleksowa weryfikacja kontrahentów
          </h2>
          <p class="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Wszystkie informacje potrzebne do podjęcia świadomej decyzji biznesowej
          </p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card class="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up">
            <CardHeader>
              <div class="mx-auto w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <FileCheck class="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Status prawny</CardTitle>
            </CardHeader>
            <CardContent><CardDescription>Sprawdź czy firma jest aktywna, w likwidacji lub upadłości. Weryfikuj dane rejestrowe i KRS.</CardDescription></CardContent>
          </Card>
          <Card class="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up">
            <CardHeader>
              <div class="mx-auto w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Shield class="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Weryfikacja VAT</CardTitle>
            </CardHeader>
            <CardContent><CardDescription>Sprawdź status VAT, czy firma jest czynnym podatnikiem i czy może wystawiać faktury.</CardDescription></CardContent>
          </Card>
          <Card class="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up">
            <CardHeader>
              <div class="mx-auto w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 class="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Analiza finansowa</CardTitle>
            </CardHeader>
            <CardContent><CardDescription>Ocena kondycji finansowej na podstawie sprawozdań finansowych i wskaźników ekonomicznych.</CardDescription></CardContent>
          </Card>
          <Card class="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up">
            <CardHeader>
              <div class="mx-auto w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle class="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Ostrzeżenia i ryzyka</CardTitle>
            </CardHeader>
            <CardContent><CardDescription>Informacje o postępowaniach sądowych, egzekucjach i innych sygnałach ostrzegawczych.</CardDescription></CardContent>
          </Card>
          <Card class="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up">
            <CardHeader>
              <div class="mx-auto w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Users class="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Powiązania kapitałowe</CardTitle>
            </CardHeader>
            <CardContent><CardDescription>Sprawdź strukturę właścicielską, zarząd i powiązania z innymi podmiotami gospodarczymi.</CardDescription></CardContent>
          </Card>
          <Card class="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up">
            <CardHeader>
              <div class="mx-auto w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Clock class="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Historia działalności</CardTitle>
            </CardHeader>
            <CardContent><CardDescription>Prześledzenie historii firmy, zmian w rejestrze i wcześniejszych nazw działalności.</CardDescription></CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-20 md:py-32 bg-background">
      <div class="container px-4 md:px-6">
        <div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div class="space-y-8 animate-fade-in-left">
            <div class="space-y-4">
              <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Dlaczego warto sprawdzać kontrahentów?</h2>
              <p class="text-xl text-muted-foreground">Ochrona przed stratami finansowymi i problemami prawnymi</p>
            </div>
            <div class="space-y-6">
              <Card class="p-6 border-l-4 border-l-primary">
                <div class="flex items-start space-x-4">
                  <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 mt-1">
                    <CheckCircle class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="font-semibold mb-2">Unikaj niesolidnych kontrahentów</h3>
                    <p class="text-muted-foreground">Sprawdź wiarygodność przed podpisaniem umowy i chroń się przed stratami finansowymi.</p>
                  </div>
                </div>
              </Card>
              <Card class="p-6 border-l-4 border-l-primary">
                <div class="flex items-start space-x-4">
                  <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 mt-1">
                    <Shield class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="font-semibold mb-2">Zgodność z przepisami</h3>
                    <p class="text-muted-foreground">Spełnij wymogi due diligence i zabezpiecz się przed odpowiedzialność podatkową.</p>
                  </div>
                </div>
              </Card>
              <Card class="p-6 border-l-4 border-l-primary">
                <div class="flex items-start space-x-4">
                  <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 mt-1">
                    <BarChart3 class="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 class="font-semibold mb-2">Podejmuj świadome decyzje</h3>
                    <p class="text-muted-foreground">Bazuj na rzetelnych danych i analizach przy wyborze partnerów biznesowych.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div class="relative animate-fade-in-right">
            <Card class="p-6 shadow-xl">
              <CardHeader>
                <CardTitle>Przykładowy raport</CardTitle>
                <CardDescription>Szczegółowa analiza kontrahenta</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="https://placehold.co/600x500/e2e8f0/e2e8f0?text=Przykładowy+Raport"
                  alt="Raport weryfikacji kontrahenta"
                  width="600"
                  height="500"
                  class="rounded-lg w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 md:py-32 bg-primary text-primary-foreground">
      <div class="container px-4 md:px-6 text-center">
        <div class="max-w-3xl mx-auto space-y-8">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-fade-in-up">
            Zacznij weryfikować kontrahentów już dziś
          </h2>
          <p class="text-xl text-primary-foreground/80 animate-fade-in-up">
            Dołącz do tysięcy firm, które chronią swój biznes dzięki kontrahent.io
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button @click="register" size="lg" variant="secondary" class="text-lg px-8 py-6">
              Zarejestruj się za darmo
              <ArrowRight class="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              class="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Sprawdź demo
            </Button>
          </div>
          <p class="text-sm text-primary-foreground/60">
            Pierwsze sprawdzenie za darmo • Bez zobowiązań • Anuluj w każdej chwili
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Shield,
  Search,
  FileCheck,
  Users,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Clock,
  ArrowRight,
} from "lucide-vue-next"

definePageMeta({
  layout: 'landing'
});

const { login, register } = useAuth();
</script>
