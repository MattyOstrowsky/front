<template>
  <div :class="colorMode.preference">
    <header class="shadow-sm border-b">
      <div class="max-w-7xl mx-auto flex items-center justify-between p-4">
        <NuxtLink to="/" class="text-xl font-bold">Moja Aplikacja</NuxtLink>
        <nav class="flex items-center space-x-4">
          <!-- Widok dla niezalogowanego użytkownika -->
          <template v-if="!isLoggedIn">
            <Button @click="login">Login</Button>
            <Button variant="outline" @click="register">Register</Button>
          </template>
          <!-- Widok dla zalogowanego użytkownika -->
          <template v-else>
            <span class="text-sm font-medium">Witaj, {{ user?.name || user?.email }}</span>
            <Button variant="outline" @click="logout">Logout</Button>
          </template>
          
          <!-- Przełącznik motywu -->
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
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu'

// Używamy naszego composable do autoryzacji
const { user, isLoggedIn, login, register, logout } = useAuth()
const colorMode = useColorMode()
</script>
