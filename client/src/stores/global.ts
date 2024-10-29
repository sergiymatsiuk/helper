import { ref, type Ref } from 'vue';
import { defineStore } from "pinia";
import { App } from 'ant-design-vue';
import type { MessageInstance } from 'ant-design-vue/es/message/interface';
import type { ModalStaticFunctions } from 'ant-design-vue/es/modal/confirm';
import type { NotificationInstance } from 'ant-design-vue/es/notification/interface';

export const useGlobalStore = defineStore('global', () => {
  const message: Ref<MessageInstance> = ref();
  const notification: Ref<NotificationInstance> = ref();
  const modal: Ref<Omit<ModalStaticFunctions, 'warn'>> = ref();

  (() => {
    const staticFunction = App.useApp();

    console.log(staticFunction);

    message.value = staticFunction.message;
    modal.value = staticFunction.modal;
    notification.value = staticFunction.notification;
  })();

  return { message, notification, modal };
});