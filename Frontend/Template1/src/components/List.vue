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
    border-top: dashed 2px #cdc9c3;
    border-bottom: dashed 2px #cdc9c3;
}

div ul li {
    padding: 10px;
    list-style:none;
}

.ElementList {
    padding: 2px;
    padding-left: 20px;
    padding-right: 20px;
    text-decoration: none;
    color: #373a40;
}
/* .wrapped{
  display: grid;
  grid-template-rows: 1;
  margin: 0;
  padding: 0;
  width: 130%;
} */

.ListName {
  grid-column: 1 / 3;
  grid-row: 1/1;
  width: 33%;
}
.ListPoints {
  grid-column: 2 / 3;
  grid-row: 1/1;
  width: 33%;
  padding-left: 20px;
}
.ListPrice {
  grid-column: 3 / 3;
  grid-row: 1/1;
  width: 33%;
  padding-left: 20px;
}
</style>
