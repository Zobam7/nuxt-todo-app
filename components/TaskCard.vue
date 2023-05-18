<template>
    <div class="bg-white px-7 py-4 rounded-lg" >
        <div class="flex justify-between items-center">
            <div>
                <p class="font-bold line-through">{{ task.taskName }}</p>
                <p class="text-gray-500">Crypto Wallet Redesign</p>
            </div>

            <ph-check-circle :size="32" color="#175de8" weight="fill" />
        </div>

        <div class="border my-4"></div>

        <div class="flex justify-between">
            <div class="flex space-x-3">
                <p class="text-gray-500">Today</p>
                <p class="text-gray-400">10:00 PM - 11:45 PM</p>
            </div>

         
                <img src="../public/profile.jpeg" alt="" class="rounded-full h-8 w-8 gap-0">
 
        </div>
    </div>
</template>

<script setup>
    const {task} = defineProps(['task'])
</script>
