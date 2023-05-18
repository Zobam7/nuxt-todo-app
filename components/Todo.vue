<template>
  <div class="flex justify-center items-center w-full h-full">
    <div class="w-[30%] bg-white rounded-lg pt-5">
      <!-- Header section -->
      <div
        class="font-bold text-lg text-center text-gray-500 border-b border-gray-200"
      >
        <ul class="flex flex-wrap justify-center ">
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              >Messages</a
            >
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active"
              aria-current="page"
              >Today's Task</a
            >
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              >Last Activity</a
            >
          </li>
        </ul>
      </div>

      <!-- Body -->
      <div class="bg-slate-100 p-5 flex-col space-y-6">
        <div class="">
          <div class="flex items-center justify-between">
            <div>
              <p class="font-bold text-3xl">Today's Task</p>
              <p class="text-gray-500">Wednesday, 11 May</p>
            </div>

            <div>
              <button
                v-if="isModalOpen !== true"
                @click.prevent="() => modal.openModal()"
                class="px-5 text-blue-500 cursor pointer bg-blue-100 py-2 ml-2 rounded-lg font-semibold"
              >
                + New Task
              </button>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <p class="border-r-2 border-gray-300 pr-4">
            All
            <span class="bg-blue-500 text-white rounded-full px-2 py-1">{{
              taskArray.length
            }}</span>
          </p>

          <p class="text-gray-400">
            Open
            <span class="bg-gray-300 text-white rounded-full px-2 py-1">{{
              taskArray.length
            }}</span>
          </p>
          <p class="text-gray-400">
            Closed
            <span class="bg-gray-300 text-white rounded-full px-2 py-1"
              >19</span
            >
          </p>
          <p class="text-gray-400">
            Archived
            <span class="bg-gray-300 text-white rounded-full px-2 py-1">2</span>
          </p>
        </div>

        <div class="mt-3" v-for="(task, index) in taskArray">
          <TaskCard :task="task" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from "~/store/modal";
import { useTodoStore } from "../store/todo";
import { storeToRefs } from "pinia";

const modal = useModalStore();
const todo = useTodoStore();
const { taskArray } = storeToRefs(todo);
const { isModalOpen } = storeToRefs(modal);

useHead({
  title: "Nuxt Todo SPA",
  meta: [{ name: "description", content: "Todo App" }],
});
</script>
