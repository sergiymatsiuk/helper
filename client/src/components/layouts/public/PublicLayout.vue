<template>
  <a-layout style="min-height: 100vh">
    <public-header />

    <public-content>
      <slot />
    </public-content>

    <public-footer />
  </a-layout>
</template>

<script setup lang="ts">
import PublicFooter from "./PublicFooter.vue";
import PublicHeader from "./PublicHeader.vue";
import PublicContent from "./PublicContent.vue";
</script>