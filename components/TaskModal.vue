<template>
    <div class="fixed flex justify-center items-center inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
        <form>
          <input
            type="text"
            v-model="taskName"
            class="border-2 border-blue-300 rounded-lg px-1 py-2 outline-none"
          />
  
          <button
            v-if="getEditedTaskId == null"
            @click.prevent="onSubmit"
            class="px-5 text-blue-500 cursor pointer bg-blue-100 py-2 ml-2 rounded-lg font-semibold"
          >
            New Task
          </button>
  
          <button
            v-else
            @click.prevent="onSubmit"
            class="px-3 text-white cursor pointer bg-green-500 py-2 ml-2"
          >
            Edit Tasks
          </button>

          <button class="px-5 text-red-500 cursor pointer bg-red-100 py-2 ml-2 rounded-lg font-semibold" @click="()=>modal.closeModal()">Close</button>
        </form>
    </div>
</template>

<script setup>
import { useModalStore } from "~/store/modal";
import { useTodoStore } from "../store/todo";
import { storeToRefs } from "pinia";

const taskName = ref("");
const todo = useTodoStore();
const { taskArray, getEditedTaskId } = storeToRefs(todo);
const modal = useModalStore()



const onSubmit = () => {
  if (getEditedTaskId.value == null) {
    if (taskName.value) {
      todo.createTask(taskName.value);
    }
  } else {
    todo.editTask(taskName.value);
  }
  taskName.value = "";
  modal.closeModal()
};

const onEdit = (id) => {
  getEditedTaskId.value = id;
  const findTodo = taskArray.value.find((todo) => todo.id == id);
  taskName.value = findTodo.taskName;
};

const onDelete = (index) => {
  todo.deleteTask(index);
};
</script>
