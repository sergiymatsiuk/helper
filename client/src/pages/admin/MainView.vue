<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const url = 'http://127.0.0.1:8000/locations'; // Замініть на вашу URL-адресу

// Статичні дані для запиту
const staticData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
};

const isSubmitting = ref(false);
const error = ref<string | null>(null);
const successMessage = ref<string | null>(null);

// Функція для відправки даних
const sendStaticData = async () => {
  isSubmitting.value = true;
  error.value = null;
  successMessage.value = null;

  try {
    const response = await axios.post(url, staticData);
    successMessage.value = 'Дані успішно відправлено!';
    console.log(response.data); // Для перевірки відповіді сервера
  } catch (err: any) {
    error.value = err.message || 'Помилка відправки даних';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div>
    <h1>Відправка статичних даних</h1>
    <button @click="sendStaticData" :disabled="isSubmitting">
      {{ isSubmitting ? 'Відправка...' : 'Відправити' }}
    </button>

    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="successMessage" class="success">{{ successMessage }}</div>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
.success {
  color: green;
}
</style>
