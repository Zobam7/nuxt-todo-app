<template>
  <div>
    <p>Mini Counter</p>
    <div class="flex space-x-5 mb-5">
      <button
        @click="counter.increament()"
        class="bg-blue-500 px-3 text-white cursor pointer"
      >
        +1
      </button>
      <p class="text-green-500">{{ counter.count }}</p>
      <button
        :disabled="counter.count == 0"
        @click="counter.decreament()"
        class="bg-red-500 px-3 text-white cursor pointer disabled:opacity-75"
      >
        -1
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '~/store/counter';
const counter = useCounterStore()

</script>
