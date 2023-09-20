<template>
  <div class="home">
    <div v-if="tasks.length > 0">
      <div v-for="task in tasks" :key="task.name" :task="task">
        <div class="taskCard">
          <div>
            <h3>{{ task.name }}</h3>
          </div>
          <p>{{ task.description }}</p>
          <div class="buttons">
              <p class="buttons-link" @click="modifyTask(task.name)">Modify</p>
              <p class="buttons-link" @click="markAsCompleted(task.name)">Mark as completed</p>
              <p class="buttons-link" @click="deleteTask(task.name)">Delete</p> 
          </div>                        
        </div>
      </div>
      <div v-if="completedTasks.length > 0">
        <h2 class="title">Completed Tasks</h2>
        <div v-for="task in completedTasks" :key="task.name" :task="task">
          <div class="taskCard">
            <div class="nameContainer">
              <h3 class="name">{{ task.name }}</h3>
            </div>
            <p>{{ task.description }}</p>
            <div class="buttons">
                <p class="buttons-link" @click="deleteTask(task.name)">Delete</p> 
            </div>                        
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h2 class="title">No tasks added</h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {onBeforeMount} from "@vue/runtime-core";
import {computed} from "vue";
import { useTasksStore } from "@/store/tasks";
import {useRouter} from "vue-router";

export default {
  name: 'HomeView',
  components: {
  },
  setup(){
    const router = useRouter();
    const tasksStore = useTasksStore();

    onBeforeMount(async () => {
      await tasksStore.loadLocalStorage();
    });

    const tasks = computed(() => {
      return tasksStore.tasks;
    });

    const completedTasks = computed(() => {
      return tasksStore.completedTasks;
    });

    async function deleteTask(task_name) {
      await tasksStore.deleteTask(task_name);
      await tasksStore.loadLocalStorage();
    }

    async function markAsCompleted(task_name) {
      await tasksStore.markAsCompleted(task_name);
      await tasksStore.loadLocalStorage();
    }

    function modifyTask(task_name) {
      router.push({path: `/modifyTask/${task_name}`});
    }

    return{
      tasksStore,
      tasks,
      completedTasks,
      deleteTask,
      markAsCompleted,
      modifyTask,
    }
  }
}
</script>


<style scoped>
.buttons{
    display: flex;
    align-items: center; 
}
.buttons-link{
    text-decoration: inherit;
    color: #5e7b24;
    margin-bottom: 15px;
    cursor: pointer;
    margin-right: 25px;
}

.buttons-link:hover {
    color: #9f9f9f;
}

.taskCard{
  width:40%;
  background-color: #d5f596;
  border-radius: 15px;
  margin:auto;
  margin-top:20px;
  padding:30px;
  padding-top: 10px;
  padding-bottom: 15px;
}

.title{
  text-align: center;
  color: #666666;
}
</style>