<template>
  <div>
    <header class="shadow-sm border-b">
      <div class="max-w-7xl mx-auto flex items-center justify-between p-4">
        <NuxtLink to="/" class="text-xl font-bold">Kontrahent.io</NuxtLink>
        <nav class="flex items-center space-x-4">
          <template v-if="!isLoggedIn">
            <Button @click="login">Login</Button>
            <Button variant="outline" @click="register">Register</Button>
          </template>
          <template v-else>
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="ghost" class="relative p-2">
                  <Icon icon="lucide:user" class="h-5 w-5" />
                  <span class="sr-only">Open user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" class="w-48">
                <DropdownMenuItem @click="goToSettings">
                  <Icon icon="lucide:settings" class="w-4 h-4 mr-2" />
                  Ustawienia
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem @click="logout">
                  <Icon icon="lucide:log-out" class="w-4 h-4 mr-2" />
                  Wyloguj
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </template>

          <ClientOnly>
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="ghost" class="relative p-2">
                  <Icon
                    icon="radix-icons:moon"
                    class="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                  />
                  <Icon
                    icon="radix-icons:sun"
                    class="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                  />
                  <span class="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem @click="colorMode.preference = 'light'">Light</DropdownMenuItem>
                <DropdownMenuItem @click="colorMode.preference = 'dark'">Dark</DropdownMenuItem>
                <DropdownMenuItem @click="colorMode.preference = 'system'">System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ClientOnly>
        </nav>
      </div>
    </header>

    <main class="p-4">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

const { goToSettings, isLoggedIn, login, register, logout } = useAuth()
const colorMode = useColorMode()
</script>