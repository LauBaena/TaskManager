<template>
    <div class="header">
        <div>
            <img class="logo" src="@/assets/tasks_icon.png" @click="handleRedirectSelector"/>
        </div>
        <div class="links">
            <a>
                <router-link :to="{ name: 'addTask' }">Add task</router-link>
            </a>
        </div>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
    name: "publicNavbar",

    setup() {
        const router = useRouter();

        const handleRedirectSelector = () => {
            return router.push("/");
        };
        return {
            handleRedirectSelector,
        };

    }
})
</script>

<style scoped>
    .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #d5f596;
    }

    .logo {
        cursor: pointer;
        width: 15%;
        margin: 30px;
    }

    a {
        font-size: 24px;
        color: #666666;
        text-decoration: none;
        margin-right: 30px;
        font-weight: bold;
    }

    a:hover {
        color: #9f9f9f;
    }
</style>