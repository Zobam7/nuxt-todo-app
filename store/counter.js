import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', ()=>{
    const count = ref(0)

    function increament(){
        count.value++
    }
    
    function decreament(){
        count.value--
    }

    return {count, increament, decreament}
})