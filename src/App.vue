<template>
  <main>
    <vue-header/>
    <router-view class="container flex justify-center px-5 py-10 sm:px-20"/>

    <!-- <div id="nav" class="bg-blue-400 shadow">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </main>
</template>

<script>

import VueHeader from "@/components/VueHeader.vue"

export default {
  name:"App",
  components:{
    VueHeader,
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
