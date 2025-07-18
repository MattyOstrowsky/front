<template>
  <SidebarProvider>
    <div class="flex min-h-screen bg-muted/30">
      <!-- App Sidebar -->
      <Sidebar class="border-r">
        <SidebarHeader>
          <NuxtLink to="/dashboard" class="text-xl font-bold flex items-center gap-2">
            <Icon icon="lucide:shield-check" class="h-6 w-6 text-primary" />
            <span>kontrahent.io</span>
          </NuxtLink>
        </SidebarHeader>

        <SidebarContent class="p-2">
          <SidebarMenu>
            <!-- General Group -->
            <SidebarGroup>
              <SidebarMenuItem>
                <NuxtLink to="/dashboard" custom v-slot="{ href, navigate, isActive }">
                  <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                    <Icon icon="lucide:layout-dashboard" class="w-4 h-4" />
                    <span>Przegląd</span>
                  </SidebarMenuButton>
                </NuxtLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <NuxtLink to="/dashboard/search" custom v-slot="{ href, navigate, isActive }">
                  <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                    <Icon icon="lucide:search" class="w-4 h-4" />
                    <span>Weryfikacja</span>
                  </SidebarMenuButton>
                </NuxtLink>
              </SidebarMenuItem>
            </SidebarGroup>

            <SidebarSeparator />

            <!-- Management Group -->
            <SidebarGroup>
               <SidebarGroupLabel>Zarządzanie</SidebarGroupLabel>
               <SidebarMenuItem>
                <NuxtLink to="/dashboard/projects" custom v-slot="{ href, navigate, isActive }">
                  <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                    <Icon icon="lucide:folder-kanban" class="w-4 h-4" />
                    <span>Projekty</span>
                  </SidebarMenuButton>
                </NuxtLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <NuxtLink to="/dashboard/alerts" custom v-slot="{ href, navigate, isActive }">
                  <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                    <Icon icon="lucide:bell" class="w-4 h-4" />
                    <span>Alerty</span>
                  </SidebarMenuButton>
                </NuxtLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <NuxtLink to="/dashboard/history" custom v-slot="{ href, navigate, isActive }">
                  <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                    <Icon icon="lucide:history" class="w-4 h-4" />
                    <span>Historia</span>
                  </SidebarMenuButton>
                </NuxtLink>
              </SidebarMenuItem>
               <SidebarMenuItem>
                <NuxtLink to="/dashboard/reports" custom v-slot="{ href, navigate, isActive }">
                  <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                    <Icon icon="lucide:file-text" class="w-4 h-4" />
                    <span>Raporty</span>
                  </SidebarMenuButton>
                </NuxtLink>
              </SidebarMenuItem>
            </SidebarGroup>

            <SidebarSeparator />

             <!-- Analytics Group -->
            <SidebarGroup>
               <SidebarGroupLabel>Analiza</SidebarGroupLabel>
               <SidebarMenuItem>
                <NuxtLink to="/dashboard/analytics" custom v-slot="{ href, navigate, isActive }">
                  <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                    <Icon icon="lucide:bar-chart-3" class="w-4 h-4" />
                    <span>Analityka</span>
                  </SidebarMenuButton>
                </NuxtLink>
              </SidebarMenuItem>
            </SidebarGroup>
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter class="p-2">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="ghost" class="w-full justify-start items-center text-left h-auto px-3 py-2 border">
                  <div class="h-8 w-8 rounded-full bg-background flex items-center justify-center mr-3 shrink-0">
                    <Icon icon="lucide:user" class="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div class="flex flex-col items-start overflow-hidden">
                      <span class="text-sm font-medium leading-none truncate">{{ user?.name || 'Użytkownik' }}</span>
                      <span class="text-xs text-muted-foreground leading-none truncate">{{ user?.email }}</span>
                  </div>
                  <Icon icon="lucide:chevrons-up-down" class="ml-auto h-4 w-4 text-muted-foreground shrink-0" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" side="top" class="w-[var(--radix-dropdown-menu-trigger-width)] mb-1">
                <DropdownMenuLabel>Zarządzaj kontem</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <NuxtLink to="/settings" custom v-slot="{ navigate }">
                  <DropdownMenuItem @click="navigate">
                    <Icon icon="lucide:settings" class="w-4 h-4 mr-2" />
                    <span>Ustawienia</span>
                  </DropdownMenuItem>
                </NuxtLink>
                <DropdownMenuItem @click="logout">
                  <Icon icon="lucide:log-out" class="w-4 h-4 mr-2" />
                  <span>Wyloguj</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
        </SidebarFooter>
      </Sidebar>

      <!-- Main Content -->
      <SidebarInset class="flex-1 flex flex-col">
        <header class="flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
            <SidebarTrigger class="-ml-1" />
            <Separator orientation="vertical" class="mr-2 h-4" />
            <slot name="header" />
        </header>
        <main class="flex-1 overflow-y-auto p-4 md:p-6">
          <NuxtPage />
        </main>
      </SidebarInset>
    </div>
  </SidebarProvider>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarInset, SidebarMenu, SidebarMenuItem, SidebarGroup, SidebarGroupLabel, SidebarMenuButton, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

const { user, logout } = useAuth()
</script>
