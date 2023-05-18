<template>
    <div class="p-5">
        <p class="">Task Name: <span class="text-xl font-bold">{{ getTodo.taskName }}</span></p>
        <p class="">Task id: <span class="text-xl font-bold">{{ getTodo.id }}</span></p>
        <button @click="back" class="text-red-500">Go Back</button>
    </div>
</template>

<script setup>

import { storeToRefs } from 'pinia'
import { useTodoStore } from "../store/todo"
const router = useRouter()

const { id } = useRoute().params
const todo = useTodoStore()
const { taskArray } = storeToRefs(todo)
const getTodo = taskArray.value[id]
const back = router.back

</script>
