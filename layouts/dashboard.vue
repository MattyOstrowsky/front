<template>
  <div class="flex h-screen bg-gray-100 dark:bg-gray-900">
    <!-- Sidebar -->
    <aside class="w-64 flex-shrink-0 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 flex flex-col">
      <!-- Logo/Nazwa Aplikacji -->
      <div class="h-16 flex items-center justify-center border-b border-gray-200 dark:border-gray-800">
        <NuxtLink to="/dashboard" class="text-xl font-bold">
          Kontrahent.io
        </NuxtLink>
      </div>
      <!-- Nawigacja -->
      <nav class="flex-1 px-4 py-4 space-y-2">
        <NuxtLink
          to="/dashboard"
          class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
          active-class="bg-gray-200 dark:bg-gray-800 font-semibold"
        >
          <Icon icon="lucide:search" class="w-5 h-5 mr-3" />
          Wyszukaj
        </NuxtLink>
        <NuxtLink
          to="/dashboard/history"
          class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
          active-class="bg-gray-200 dark:bg-gray-800 font-semibold"
        >
          <Icon icon="lucide:history" class="w-5 h-5 mr-3" />
          Historia
        </NuxtLink>
      </nav>
    </aside>

    <!-- Główna treść -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Górny pasek -->
      <header class="h-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 flex items-center justify-end px-6">
        <div class="flex items-center space-x-4">
          <!-- Przełącznik motywu -->
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" class="relative p-2">
                <Icon icon="radix-icons:moon" class="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Icon icon="radix-icons:sun" class="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem @click="colorMode.preference = 'light'">Light</DropdownMenuItem>
              <DropdownMenuItem @click="colorMode.preference = 'dark'">Dark</DropdownMenuItem>
              <DropdownMenuItem @click="colorMode.preference = 'system'">System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <!-- Menu użytkownika -->
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" class="flex items-center space-x-2">
                <img v-if="user?.picture" :src="user.picture" class="w-8 h-8 rounded-full" alt="Avatar"/>
                <span v-else class="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  <Icon icon="lucide:user" class="w-5 h-5" />
                </span>
                <span>{{ user?.name || user?.email }}</span>
                <Icon icon="lucide:chevron-down" class="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" class="w-48">
              <!-- ZAKTUALIZOWANY PRZYCISK -->
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
        </div>
      </header>
      <!-- Treść strony -->
      <main class="flex-1 overflow-y-auto p-6">
        <slot />
      </main>
    </div>
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

// ZAKTUALIZOWANY IMPORT - dodano goToSettings
const { user, logout, goToSettings } = useAuth()
const colorMode = useColorMode()
</script>
