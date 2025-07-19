<script setup lang="ts">
import { onMounted } from 'vue';
// ... inne importy
import { useHeader } from '~/composables/useHeader';

definePageMeta({
  layout: 'settings',
  middleware: 'auth'
});

const { setHeader } = useHeader();
onMounted(() => {
  setHeader({ breadcrumbs: [{ label: 'Powiadomienia' }] });
});
</script>