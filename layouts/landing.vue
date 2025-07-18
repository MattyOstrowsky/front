<template>
  <div class="min-h-screen bg-background flex flex-col">
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container flex h-16 items-center justify-between px-4 md:px-6">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Shield class="h-5 w-5 text-primary-foreground" />
          </div>
          <span class="text-xl font-bold text-foreground">kontrahent.io</span>
        </NuxtLink>

        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/functions" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Funkcje
          </NuxtLink>
          <NuxtLink to="/price" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Cennik
          </NuxtLink>
          <NuxtLink to="/contact" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Kontakt
          </NuxtLink>
           <NuxtLink to="/contact" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pomoc
          </NuxtLink>
        </nav>

        <div class="flex items-center space-x-4">
          <Button variant="ghost" class="hidden md:inline-flex" @click="login">
            Zaloguj się
          </Button>
          <Button @click="register">Zarejestruj się</Button>
          <Button variant="ghost" size="icon" class="md:hidden">
            <Menu class="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer id="kontakt-footer" class="bg-card border-t py-16">
        <div class="container px-4 md:px-6">
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div class="space-y-4">
              <div class="flex items-center space-x-2">
                <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Shield class="h-5 w-5 text-primary-foreground" />
                </div>
                <span class="text-xl font-bold">kontrahent.io</span>
              </div>
              <p class="text-muted-foreground">Profesjonalna weryfikacja kontrahentów dla bezpiecznego biznesu.</p>
              <div class="space-y-2">
                <div class="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone class="h-4 w-4" />
                  <span>+48 123 456 789</span>
                </div>
                <div class="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail class="h-4 w-4" />
                  <span>kontakt@kontrahent.io</span>
                </div>
                <div class="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin class="h-4 w-4" />
                  <span>Warszawa, Polska</span>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Produkt</h3>
              <ul class="space-y-2">
                <li><NuxtLink to="/functions" class="text-muted-foreground hover:text-foreground transition-colors">Funkcje</NuxtLink></li>
                <li><NuxtLink to="/price" class="text-muted-foreground hover:text-foreground transition-colors">Cennik</NuxtLink></li>
                <li><NuxtLink to="/#api" class="text-muted-foreground hover:text-foreground transition-colors">API</NuxtLink></li>
                <li><NuxtLink to="/#integracje" class="text-muted-foreground hover:text-foreground transition-colors">Integracje</NuxtLink></li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Firma</h3>
              <ul class="space-y-2">
                <li><NuxtLink to="/#o-nas" class="text-muted-foreground hover:text-foreground transition-colors">O nas</NuxtLink></li>
                <li><NuxtLink to="/#blog" class="text-muted-foreground hover:text-foreground transition-colors">Blog</NuxtLink></li>
                <li><NuxtLink to="/#kariera" class="text-muted-foreground hover:text-foreground transition-colors">Kariera</NuxtLink></li>
                <li><NuxtLink to="/contact" class="text-muted-foreground hover:text-foreground transition-colors">Kontakt</NuxtLink></li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-semibold">Pomoc</h3>
              <ul class="space-y-2">
                <li><NuxtLink to="/contact" class="text-muted-foreground hover:text-foreground transition-colors">Centrum pomocy</NuxtLink></li>
                <li><NuxtLink to="/#dokumentacja" class="text-muted-foreground hover:text-foreground transition-colors">Dokumentacja</NuxtLink></li>
                <li><NuxtLink to="/#webinary" class="text-muted-foreground hover:text-foreground transition-colors">Webinary</NuxtLink></li>
                <li><NuxtLink to="/#status" class="text-muted-foreground hover:text-foreground transition-colors">Status systemu</NuxtLink></li>
              </ul>
            </div>
          </div>

          <div class="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p class="text-muted-foreground text-sm">
              © {{ new Date().getFullYear() }} kontrahent.io. Wszelkie prawa zastrzeżone.
            </p>
            <div class="flex space-x-6 mt-4 md:mt-0">
              <NuxtLink to="/privacy-policy" class="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Polityka prywatności
              </NuxtLink>
              <NuxtLink to="/terms-of-service" class="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Regulamin
              </NuxtLink>
            </div>
          </div>
        </div>
      </footer>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { Shield, Menu, Phone, Mail, MapPin } from "lucide-vue-next"

const { login, register } = useAuth();
</script>
