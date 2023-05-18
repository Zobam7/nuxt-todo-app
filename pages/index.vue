<template>
  <div class="p-5 bg-gray-500 min-h-screen">
    <div v-if="isModalOpen">
        <TaskModal />
      </div>
    <Todo />
  </div>
</template>

<script setup>

useHead({
  title: "Nuxt SPA",
  meta: [{ name: "description", content: "Nuxt App" }],
});

import { storeToRefs } from "pinia";
import { useModalStore } from "../store/modal"
const modal = useModalStore();
const { isModalOpen } = storeToRefs(modal);

</script>
