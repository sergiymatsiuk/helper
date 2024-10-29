<script setup lang="ts">
import ConfigProvider from "./components/providers/ConfigProvider.vue";
import AppProvider from "./components/providers/AppProvider.vue";
import AdminLayout from "./components/layouts/admin";
import PublicLayout from "./components/layouts/public";
</script>

<template>
  <config-provider>
    <app-provider>
      <public-layout v-if="true">
        Hello
        <router-view />
      </public-layout>

      <admin-layout v-else>
        <router-view />
      </admin-layout>
    </app-provider>
  </config-provider>
</template>
