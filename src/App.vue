<script setup>
import AllFriends from './components/AllFriends.vue';
import UnAmi from './components/UnAmi.vue';
import Header from './components/Header.vue'
import GetRequest from './components/GetRequest.vue'
import Poke from './components/PokeApi.vue'
import Meteo from './components/MeteoApi.vue'
// import TaskList from './components/TaskList.vue';


</script>

<template>
  <Header></Header>
  <div class="superApp">
    <h1 class="text-center">Bienvenue ici on est dans le App.vue</h1>
    <!-- <StevenSeagal></StevenSeagal> -->
    <!-- <TaskList></TaskList> -->
    <!-- <UnAmi nom="Bob" phone="05-24-56-59-85" mail="bob@hotmail.fr"></UnAmi> -->
    <router-view></router-view>
    
    

    
    
  </div>
</template>

<style scoped>
.superApp {
  background-color: blueviolet;
  padding: 15%;
}
</style>
