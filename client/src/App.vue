<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref, computed } from "vue";
import ConfigProvider from "./components/providers/ConfigProvider.vue";
import AppProvider from "./components/providers/AppProvider.vue";
import AdminLayout from "./components/layouts/admin";
import PublicLayout from "./components/layouts/public";

const route = useRoute();
const router = useRouter();
let isReady = ref(false);

console.log(route);

router.isReady().then(() => {
  isReady.value = true;
});

const layout = computed(() => {
  return isReady.value ? route.meta.layout : "none";
});
</script>

<template>
  <config-provider>
    <app-provider>
      <public-layout v-if="layout === 'public'">
        <router-view />
      </public-layout>

      <admin-layout v-else-if="layout === 'admin'">
        <router-view />
      </admin-layout>

      <router-view v-else />
    </app-provider>
  </config-provider>
</template>
