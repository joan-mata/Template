<script setup>
import List from './../components/List.vue'
</script>



<template>
  <div class="wrapped">
    <List />
  </div>
</template>

<style scoped>
.box1{
  grid-column: 1 / 3;
  grid-row:1/1;
  width: 33%;
}
.box2{
  grid-column: 2 / 3;
  grid-row:1/1;
  width: 33%;
}
.box3{
  grid-column: 3 / 3;
  grid-row:1/1;
  width: 33%;
}
</style>