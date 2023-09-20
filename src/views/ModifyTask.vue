<template>
    <div class="taskCard"> 
        <h3>{{ task.name }}</h3>
        <p>{{ task.description }}</p>
    </div>
    <div class="form">
        <form @submit.prevent="modifyTextTask()">
            <div class="form-item">
                <p class="formLabel">New task description</p>
                <input v-model="taskForm.description" type="text" name="description" id="description" class="form-style" required/>
            </div>
            <div class="form-item">
                <input type="submit" class="add pull-right" value="Modify">
            </div>
        </form>
    </div>
</template>

<script>
import {computed} from "vue";
import { ref } from "vue";
import { useTasksStore } from "@/store/tasks";
import {onBeforeMount} from "@vue/runtime-core";

export default {
    name: "ModifyTask",
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const tasksStore = useTasksStore();

        onBeforeMount(async () => {
            await tasksStore.modifyTask(props.name);
        });

        const task = computed(() => {
            return tasksStore.task;
        });

        let taskForm = ref({
                name: props.name,
                description: "",
                completed: false
        });

        function modifyTextTask(){
            tasksStore.modifyTextTask(taskForm.value);
        }

        return{
            tasksStore,
            task,
            taskForm,
            modifyTextTask,
        }
    }
}
</script>

<style scoped>

.form {
        width:40%;
        background-color: #f6f5f5;
        border-radius: 15px;
        margin:auto;
        margin-top:50px;
        padding:40px;
        padding-top: 20px;
        padding-bottom: 25px;
    }
    .form-item{
        margin-bottom: 20px;
    }
    .formLabel {
        color:#565656;
        font-weight: bold;
        font-size: 18px;
    }

    .form-style{
        color:#565656;
        width: 90%;
        height: 45px;
        padding: 5px 30px;
        border: 1px solid #ccc;
        border-radius: 25px;
        font-size: 16px;
        letter-spacing: .8px;
    }

    .add{
        width: 115px;
        height: 40px;
        background-color: #a4a1a1;
        border:1px solid #a4a1a1;
        border-radius: 19px;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
    }
    .add:hover{
        background-color: #bdbaba; 
        border:1px solid #bdbaba; 
        color:#fff; 
        cursor:pointer;}

    .taskCard{
        width:40%;
        background-color: #f6f5f5;
        border-radius: 15px;
        margin:auto;
        margin-top:50px;
        padding:30px;
        padding-top: 10px;
        padding-bottom: 15px;
    }


    @media screen and (max-width: 1250px) {
        .form {
            width: 60%;
            flex-wrap: wrap;
        }
    }

</style>