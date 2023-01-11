<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navegador from './components/Navegador.vue'
</script>

<template>
  <header>
    <h1> BAR PACO </h1>

    <div class="wrapper">
      <Navegador />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

header{
  display: grid;
  grid-template-columns: 1;
}
h1{
  text-align: center;
  padding: 10px;
  margin: 0;
}
</style>
