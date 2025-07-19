<template>
  <SidebarProvider>
      <Sidebar class="border-r flex min-h-screen bg-muted/30">
        <SidebarHeader>
          <NuxtLink to="/dashboard" class="flex items-center gap-2 text-xl font-bold">
            <Icon icon="lucide:shield-check" class="h-6 w-6 text-primary" />
            <span>kontrahent.io</span>
          </NuxtLink>
        </SidebarHeader>

        <SidebarContent class="p-2">
          <SidebarMenu>
            <SidebarGroup>
              <SidebarGroupLabel>Twoje Konto</SidebarGroupLabel>
              <SidebarMenuItem>
                <NuxtLink to="/settings" custom #="{ href, navigate, isActive }">
                  <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                    <Icon icon="lucide:user" class="h-4 w-4" />
                    <span>Profil</span>
                  </SidebarMenuButton>
                </NuxtLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <NuxtLink to="/settings/security" custom #="{ href, navigate, isActive }">
                  <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                    <Icon icon="lucide:lock" class="h-4 w-4" />
                    <span>Bezpieczeństwo</span>
                  </SidebarMenuButton>
                </NuxtLink>
              </SidebarMenuItem>
            </SidebarGroup>

            <SidebarSeparator />

            <SidebarGroup>
              <SidebarGroupLabel>Organizacja</SidebarGroupLabel>
              <SidebarMenuItem>
                <NuxtLink to="/settings/organization" custom #="{ href, navigate, isActive }">
                  <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                    <Icon icon="lucide:building" class="h-4 w-4" />
                    <span>Dane Organizacji</span>
                  </SidebarMenuButton>
                </NuxtLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <NuxtLink to="/settings/billing" custom #="{ href, navigate, isActive }">
                  <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                    <Icon icon="lucide:credit-card" class="h-4 w-4" />
                    <span>Rozliczenia</span>
                  </SidebarMenuButton>
                </NuxtLink>
              </SidebarMenuItem>
            </SidebarGroup>
            
            <SidebarSeparator />

            <SidebarGroup>
              <SidebarGroupLabel>Ustawienia Aplikacji</SidebarGroupLabel>
              <SidebarMenuItem>
                <NuxtLink to="/settings/notifications" custom #="{ href, navigate, isActive }">
                  <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                    <Icon icon="lucide:bell" class="h-4 w-4" />
                    <span>Powiadomienia</span>
                  </SidebarMenuButton>
                </NuxtLink>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <NuxtLink to="/settings/api" custom #="{ href, navigate, isActive }">
                  <SidebarMenuButton :is-active="isActive" :href="href" @click="navigate" as="a">
                    <Icon icon="lucide:code" class="h-4 w-4" />
                    <span>API</span>
                  </SidebarMenuButton>
                </NuxtLink>
              </SidebarMenuItem>
            </SidebarGroup>
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter class="p-2">
          </SidebarFooter>
      </Sidebar>

      <div class="flex flex-1 flex-col overflow-hidden">
        <header class="flex h-16 shrink-0 items-center gap-4 border-b bg-background px-4 md:px-6">
          <SidebarTrigger class="md:hidden" />
          
          <Breadcrumb class="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink as-child>
                  <NuxtLink to="/settings">Ustawienia</NuxtLink>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <template v-for="crumb in headerState.breadcrumbs" :key="crumb.label">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{{ crumb.label }}</BreadcrumbPage>
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

        <main class="flex-1 overflow-y-auto p-4 md:p-12 w-full">
          <NuxtPage />
        </main>
      </div>

  </SidebarProvider>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarGroup, SidebarGroupLabel, SidebarMenuButton, SidebarProvider, SidebarTrigger, SidebarSeparator } from "@/components/ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { useHeader } from '~/composables/useHeader';

const colorMode = useColorMode()
const { headerState } = useHeader();
</script>