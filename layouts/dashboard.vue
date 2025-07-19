<template>
  <SidebarProvider>
      <Sidebar class=" flex min-h-screen bg-muted/30">
        <SidebarHeader>
          <NuxtLink to="/dashboard" class="flex items-center gap-2 text-xl font-bold">
            <Icon icon="lucide:shield-check" class="h-6 w-6 text-primary" />
            <span>kontrahent.io</span>
          </NuxtLink>
        </SidebarHeader>

        <SidebarContent class="p-2">
          <SidebarMenu>
            <SidebarGroup>
              <SidebarMenuItem>
                <NuxtLink to="/dashboard" custom #="{ href, navigate, isActive }">
                  <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                    <Icon icon="lucide:layout-dashboard" class="h-4 w-4" />
                    <span>Przegląd</span>
                  </SidebarMenuButton>
                </NuxtLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <NuxtLink to="/dashboard/search" custom #="{ href, navigate, isActive }">
                  <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                    <Icon icon="lucide:search" class="h-4 w-4" />
                    <span>Weryfikacja</span>
                  </SidebarMenuButton>
                </NuxtLink>
              </SidebarMenuItem>
            </SidebarGroup>

            <SidebarSeparator />

            <SidebarGroup>
              <SidebarGroupLabel>Zarządzanie</SidebarGroupLabel>
              <SidebarMenuItem>
                <NuxtLink to="/dashboard/projects" custom #="{ href, navigate, isActive }">
                  <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                    <Icon icon="lucide:folder-kanban" class="h-4 w-4" />
                    <span>Projekty</span>
                  </SidebarMenuButton>
                </NuxtLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <NuxtLink to="/dashboard/alerts" custom #="{ href, navigate, isActive }">
                  <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                    <Icon icon="lucide:bell" class="h-4 w-4" />
                    <span>Alerty</span>
                  </SidebarMenuButton>
                </NuxtLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <NuxtLink to="/dashboard/history" custom #="{ href, navigate, isActive }">
                  <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                    <Icon icon="lucide:history" class="h-4 w-4" />
                    <span>Historia</span>
                  </SidebarMenuButton>
                </NuxtLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <NuxtLink to="/dashboard/reports" custom #="{ href, navigate, isActive }">
                  <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                    <Icon icon="lucide:file-text" class="h-4 w-4" />
                    <span>Raporty</span>
                  </SidebarMenuButton>
                </NuxtLink>
              </SidebarMenuItem>
            </SidebarGroup>

            <SidebarSeparator />

            <SidebarGroup>
              <SidebarGroupLabel>Analiza</SidebarGroupLabel>
              <SidebarMenuItem>
                <NuxtLink to="/dashboard/analytics" custom #="{ href, navigate, isActive }">
                  <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                    <Icon icon="lucide:bar-chart-3" class="h-4 w-4" />
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
              <NuxtLink to="/settings" custom #="{ navigate }">
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

      <div class="flex flex-1 flex-col overflow-hidden">
        <header class="flex h-16 shrink-0 items-center gap-4 border-b bg-background px-4 md:px-6">
          <SidebarTrigger class="md:hidden" />
          
          <Breadcrumb class="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink as-child>
                  <NuxtLink to="/dashboard">Dashboard</NuxtLink>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <template v-for="(crumb, index) in headerState.breadcrumbs" :key="crumb.label">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink v-if="crumb.to && index < headerState.breadcrumbs.length - 1" as-child>
                    <NuxtLink :to="crumb.to">{{ crumb.label }}</NuxtLink>
                  </BreadcrumbLink>
                  <BreadcrumbPage v-else>
                    {{ crumb.label }}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </template>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div class="ml-auto flex items-center gap-2">
             <ClientOnly>
                <DropdownMenu>
                  <DropdownMenuTrigger as-child>
                    <Button variant="ghost" size="icon">
                      <Icon icon="radix-icons:moon" class="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Icon icon="radix-icons:sun" class="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span class="sr-only">Zmień motyw</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem @click="colorMode.preference = 'light'">Jasny</DropdownMenuItem>
                    <DropdownMenuItem @click="colorMode.preference = 'dark'">Ciemny</DropdownMenuItem>
                    <DropdownMenuItem @click="colorMode.preference = 'system'">Systemowy</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </ClientOnly>
          </div>
        </header>

        <main class="flex-1 overflow-y-auto p-4 md:p-6 w-full">
          <NuxtPage />
        </main>
    </div>
  </SidebarProvider>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarGroup, SidebarGroupLabel, SidebarMenuButton, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { useHeader } from '~/composables/useHeader'

const { user, logout } = useAuth()
const { headerState } = useHeader()
const colorMode = useColorMode()
</script>