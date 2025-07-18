<template>

    <div class="flex flex-col h-screen">
      <div class="flex flex-1 overflow-hidden">
        <SidebarProvider>
        <Sidebar class="border-r">
    <SidebarHeader>
             <NuxtLink to="/dashboard" class="text-xl font-bold flex items-center gap-2">
                <Icon icon="lucide:scan-search" class="h-6 w-6" />
                <span>BiznesSkan</span>
            </NuxtLink>
          </SidebarHeader>
          <SidebarContent class="p-2">
            <SidebarMenu>

              <SidebarGroup>
                <SidebarGroupLabel>Wyszukiwania</SidebarGroupLabel>
                <SidebarMenuItem>
                  <NuxtLink to="/dashboard" custom v-slot="{ href, navigate, isActive }">
                    <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                      <Icon icon="lucide:bell" class="w-4 h-4" />
                      Wyszukaj
                    </SidebarMenuButton>
                  </NuxtLink>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <NuxtLink to="/dashboard/history" custom v-slot="{ href, navigate, isActive }">
                    <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                      <Icon icon="lucide:settings" class="w-4 h-4" />
                      Historia
                    </SidebarMenuButton>
                  </NuxtLink>
                </SidebarMenuItem>
              </SidebarGroup>

              <SidebarSeparator class="my-4" />

              <SidebarGroup>
                <SidebarGroupLabel>Statystyki</SidebarGroupLabel>
                <SidebarMenuItem>
                  <NuxtLink to="/dashboard/statistics" custom v-slot="{ href, navigate, isActive }">
                    <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                      <Icon icon="lucide:file-text" class="w-4 h-4" />
                      Ogólne
                    </SidebarMenuButton>
                  </NuxtLink>
                </SidebarMenuItem>
              </SidebarGroup>

            </SidebarMenu>
          </SidebarContent>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="ghost" class="w-full justify-start items-center text-left h-auto px-3 py-2">
                <div class="h-8 w-8 rounded-full bg-background flex items-center justify-center mr-3">
                  <Icon icon="lucide:user" class="h-4 w-4 text-muted-foreground" />
                </div>
                <div class="flex flex-col items-start">
                    <span class="text-sm font-medium leading-none">{{ user?.name || 'Użytkownik' }}</span>
                    <span class="text-xs text-muted-foreground leading-none">{{ user?.email }}</span>
                </div>
                <Icon icon="lucide:chevrons-up-down" class="ml-auto h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" side="top" class="w-68 mb-1">
              <DropdownMenuLabel>Zarządzaj kontem</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <NuxtLink to="/settings" custom v-slot="{ navigate }">
                <DropdownMenuItem @click="navigate">
                  <Icon icon="lucide:settings" class="w-4 h-4 mr-2" />
                  <span>Ustawienia</span>
                </DropdownMenuItem>
              </NuxtLink>

              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Icon icon="lucide:sun-moon" class="w-4 h-4 mr-2" />
                  <span>Zmień motyw</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem @click="colorMode.preference = 'light'">
                      <Icon icon="lucide:sun" class="w-4 h-4 mr-2" />
                      Jasny
                    </DropdownMenuItem>
                    <DropdownMenuItem @click="colorMode.preference = 'dark'">
                      <Icon icon="lucide:moon" class="w-4 h-4 mr-2" />
                      Ciemny
                    </DropdownMenuItem>
                    <DropdownMenuItem @click="colorMode.preference = 'system'">
                      <Icon icon="lucide:laptop" class="w-4 h-4 mr-2" />
                      Systemowy
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>

              <DropdownMenuSeparator />

              <DropdownMenuItem @click="logout">
                <Icon icon="lucide:log-out" class="w-4 h-4 mr-2" />
                <span>Wyloguj</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Sidebar>

        <SidebarInset class="flex-1 overflow-y-auto p-6">
          <NuxtPage />
        </SidebarInset>
        
        </SidebarProvider>
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
  DropdownMenuItem
} from '@/components/ui/dropdown-menu'

const { user, logout } = useAuth()
const colorMode = useColorMode()
</script>