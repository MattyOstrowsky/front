<template>

  <div :class="colorMode.preference">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { initAuth } = useAuth()
const colorMode = useColorMode()


onMounted(async () => {
  await initAuth()
})
</script>
