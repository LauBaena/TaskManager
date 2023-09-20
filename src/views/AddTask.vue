<template>
    <div class="form">
        <form @submit.prevent="addTask()">
            <div class="form-item">
                <p class="formLabel">Task name</p>
                <input v-model="taskForm.name" type="text" name="name" id="name" class="form-style" pattern="[a-zA-Z0-9]*" title="Task name must contain just letters and/or numbers." required/>
            </div>
            <div class="form-item">
                <p class="formLabel">Task description</p>
                <input v-model="taskForm.description" type="text" name="description" id="description" class="form-style" required/>
            </div>
            <div class="form-item">
                <input type="submit" class="add pull-right" value="Add">
            </div>
        </form>
    </div>
</template>

<script>
    import { ref } from "vue";
    import { defineComponent } from "vue";
    import { useTasksStore } from "@/store/tasks";
    
    export default defineComponent({
        name: "AddTask",
    
        setup() {
            const tasksStore = useTasksStore();

            let taskForm = ref({
                name: "",
                description: "",
                completed: false
            });

            function addTask(){
                tasksStore.addTask(taskForm.value);
            }
        
            return {
                taskForm,
                tasksStore,
                addTask,
            };
        },
    });
</script>
  
<style scoped>
    .form {
        width:40%;
        background-color: #f6f5f5;
        border-radius: 15px;
        margin:auto;
        margin-top:80px;
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


    @media screen and (max-width: 1250px) {
        .form {
            width: 60%;
            flex-wrap: wrap;
        }
    }

</style>
  