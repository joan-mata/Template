<script>
export default {
    data() {
        return {
            direccion: 'C/ Alfonso 31 (Sant Cugat)',
            numero: '93 123 45 67',
            horario: ['Martes a Jueves: 12h a 22h','Viernes, Sabado y Domingo: 12h a 00h'] 
          }
    },
}

</script>



<template>
  <div class="wrapped">
    <div class="box box1">
      <p> Nos encontraras en: 
        <br/>
        {{ direccion }} 
      </p>
    </div>
    <div class="box box2">
      <p> Para reservar llama: 
        <br>
        {{ numero }} 
      </p>
    </div>
    <div class="box box3">
      <p> 
        {{ horario[0]}} 
        <br>
        {{ horario[1]}}
      </p>
    </div>
  </div>
</template>

<style scoped>
.wrapped{
  display: grid;
  grid-template-rows: 1;
  margin: 0;
  padding: 0;
  width: 130%;
}
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