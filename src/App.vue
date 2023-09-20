<template>
  <div>
    <publicNavbar/>
    <router-view/>
  </div>
</template>

<script>
import publicNavbar from "@/components/NavbarPublic.vue";

export default{
  name: "App",
  components:{
    publicNavbar
  }
}
</script>

<style>
  html, body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    margin: 0px;
    padding: 0px;
  }

</style>
