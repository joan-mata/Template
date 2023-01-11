<script>
export default {
    data() {
        return {
            Nav: ['INFORMACIÓN','TAPAS','ENTRANTES','PRIMEROS','SEGUNDOS','BOCATAS FRIOS','BOCATAS CALIENTES','POSTRES','BEBIDAS'],
        }
    },
}

</script>




<template>
  <nav>
    <ul>
        <li v-for="item in Nav" :key="item">
            <router-link :to="item" class="ElementNav">{{ item }}</router-link>
        </li>
    </ul>
    </nav>
</template>







<style scoped>
nav{
    display:flex;
    justify-content: center;
    align-items: center;
}

nav ul {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    border-top: dashed 2px #cdc9c3;
    border-bottom: dashed 2px #cdc9c3;
}

nav ul li {
    padding: 10px;
    list-style:none;
}

.ElementNav {
    padding: 2px;
    padding-left: 20px;
    padding-right: 20px;
    text-decoration: none;
    color: #373a40;
}

.ElementNav:visited  { text-decoration: none; color:#373a40; }
.ElementNav:hover { text-decoration: none; color:#968c83; }
</style>