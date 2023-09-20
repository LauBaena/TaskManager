import {defineStore} from "pinia";
import router from '../router/index.js';

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [],
    completedTasks: [],
    allTasks: [],
    task: {}
  }),

  getters: {
  },

  actions: {

    async loadLocalStorage(){
        const tasksLocal = localStorage.getItem('tasks');
        if(tasksLocal){
            this.allTasks = JSON.parse(tasksLocal);
            this.completedTasks = this.allTasks.filter(task => task.completed);
            this.tasks = this.allTasks.filter(task => !task.completed);
        }
    },

    async modifyTask(task_name){
        this.allTasks.forEach(task =>{
            if(task.name === task_name){
                this.task = task;
            }
        })
    },

    async markAsCompleted(task_name){
        this.allTasks.forEach(task =>{
            if(task.name === task_name){
                task.completed = true;
            }
        })
        let tasksAsJSON = JSON.stringify(this.allTasks);
        localStorage.setItem('tasks', tasksAsJSON);
    },

    async deleteTask(task_name){
        //Save all tasks except for the task with the specific name
        this.allTasks = this.allTasks.filter(task => task.name !== task_name);
        let tasksAsJSON = JSON.stringify(this.allTasks);
        localStorage.setItem('tasks', tasksAsJSON);
    },

    async addTask(newTask){
        if(this.allTasks.some(task => task.name === newTask.name)){
            alert(`You can't repeat the name of the task`)
            return;
        }else{
            this.allTasks.push(newTask);
            let tasksAsJSON = JSON.stringify(this.allTasks);
            localStorage.setItem('tasks', tasksAsJSON);
            await router.push({ path: '/' });
        }
    },
  },  
});