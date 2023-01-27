<script>
import InformacionView from '../views/InfoView.vue';

export default {
    data() {
        return {
            // Nav: ['informacion','tapas','entrantes','primeros','segundos','bocatas frios','bocatas calientes','postres','bebidas'],
            Nav: [
                {name: 'Información',       path: 'info'}, 
                {name: 'Tapas',             path: 'tapas'}, 
                {name: 'Entrantes',         path: 'entrantes'}, 
                {name: 'Primeros',          path: 'primeros'}, 
                {name: 'Segundos',          path: 'segundos'}, 
                {name: 'Bocatas Calientes', path: 'hotboc'}, 
                {name: 'Bocatas Fríos',     path: 'coldboc'}, 
                {name: 'Postres',           path: 'postres'}, 
                {name: 'Bebidas',           path: 'bebidas'}
            ]
        }

    },
}

</script>


<template>
  <nav>
    <ul>
        <!-- <li v-for="item in Nav" :key="item"> -->
        <li v-for="item in Nav" :key="item">
            <router-link :to="item.path" class="ElementNav">{{ item.name.toUpperCase() }}</router-link>
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