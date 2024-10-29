<script setup lang="ts">
import { useGlobalStore } from "../stores/global.ts";
import ConfigProvider from "../components/providers/ConfigProvider.vue";
import AdminLayout from "./layouts/admin/AdminLayout.vue";


const { message, modal, notification } = useGlobalStore();

console.log(message, modal, notification);

const showMessage = () => {
  message.success('Success!');
};

const showModal = () => {
  modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
};

const showNotification = () => {
  notification.info({
    message: `Notification topLeft`,
    description: 'Hello, Ant Design Vue!!',
    placement: 'topLeft',
  });
};
</script>

<template>
  <a-space>
    <a-button type="primary" @click="showMessage">Open message</a-button>
    <a-button type="primary" @click="showModal">Open modal</a-button>
    <a-button type="primary" @click="showNotification">Open notification</a-button>
  </a-space>
</template>
