<template>
    <div>
      <form>
        <input type="text" v-model="taskName" class="border-2 border-green-300 px-1 py-2 outline-none"/>

        <button v-if="getEditedTaskId == null" @click.prevent="onSubmit" class="px-3 text-white cursor pointer bg-green-500 py-2 ml-2">Add Tasks</button>

        <button v-else @click.prevent="onSubmit" class="px-3 text-white cursor pointer bg-green-500 py-2 ml-2">Edit Tasks</button>
      </form>
  
      <div class="mt-3" v-for="(task, index) in taskArray">
        <div v-if="task.id !== getEditedTaskId">
            <p :key="index" class="font-bold text-xl">{{ task.taskName }}</p>
            <div class="flex space-x-3">
              <button @click.prevent="onDelete(task.id)" class="bg-red-500 px-3 text-white cursor pointer">Delete</button>
              <button @click.prevent="onEdit(task.id)" class="bg-blue-500 px-3 text-white cursor pointer">Edit</button>
              <NuxtLink class="bg-yellow-500 px-3 text-white cursor-pointer" :to="`/${task.id}`">View</NuxtLink>
            </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { useTodoStore } from "../store/todo"
import { storeToRefs } from 'pinia'


const taskName = ref("");
const todo = useTodoStore()
const { taskArray, getEditedTaskId } = storeToRefs(todo)

useHead({
  title: "Nuxt Todo SPA",
  meta: [{ name: "description", content: "Todo App" }],
});

const onSubmit = () => {
  if (getEditedTaskId.value == null) {
    if (taskName.value) {
      todo.createTask(taskName.value)
    }
  } else {
    todo.editTask(taskName.value)
    
  }
  taskName.value = "";
};

const onEdit = (id) => {
  getEditedTaskId.value = id; 
  const findTodo = taskArray.value.find((todo) => todo.id == id);
  taskName.value = findTodo.taskName;
};

const onDelete = (index) => {
  todo.deleteTask(index)
};
</script>
