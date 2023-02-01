<script>

export default {
    data() {
        return {
            Food: [
                {name: 'Olivas',    price: '2'}, 
                {name: 'Bravas',    price: '4,5'}, 
                {name: 'Jamón',     price: '9'}, 
                {name: 'Chocos',    price: '4,5'}, 
                {name: 'Morros',    price: '4'}, 
                {name: 'Calamares', price: '6'}, 
                {name: 'Pinchos',   price: '5'}, 
                {name: 'Gambas',    price: '7'}, 
                
            ]
        }

    },
}

</script>

<template>
<div>
    <ul>
        <li v-for="item in Food" :key="item">
            <div class="ElementList">
                <a class="ListName">{{ item.name }}</a>
                <a class="ListPoints"> ...... </a>
                <a class="ListPrice">{{ item.price }} €</a>
            </div>
        </li>
    </ul>
</div>
</template>


<style scoped>
div{
    display:flex;
    justify-content: center;
    align-items: center;
}

div ul {
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
}

div ul li {
    padding: 10px;
    list-style:none;
}

.ElementList {
    padding: 2px;
    padding-left: 10%;
    padding-right: 10%;
    text-decoration: none;
    color: #373a40;
    display: grid;
    grid-template-rows: 1;
    grid-template-columns: 3fr 2fr 2fr;
    align-items: center;

} 

</style>
