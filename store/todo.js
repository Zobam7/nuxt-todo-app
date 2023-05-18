import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", () => {
  // inital state of store
  const taskArray = ref([
    { taskName: "First Task", id: 0 },
    { taskName: "Second Task", id: 1 },
  ]);
  const getEditedTaskId = ref(null);

  // Create a new Task
  function createTask(tasks) {
    const index = taskArray.value.length;
    taskArray.value.push({ taskName: tasks, id: index });
    console.log(taskArray.value);
  }

  // Edit a current Task
  function editTask(tasks) {
    const newTodo = taskArray.value.map((todo) =>
      todo.id === getEditedTaskId.value
        ? { ...todo, taskName: tasks }
        : todo
    );
    taskArray.value = newTodo;
    getEditedTaskId.value = null;
  }

  // Delete a Task
  function deleteTask(index){
    const newArr = taskArray.value.filter((task) => task.id !== index)
    taskArray.value = newArr
  }

  return { taskArray, getEditedTaskId, createTask, editTask, deleteTask };
});
