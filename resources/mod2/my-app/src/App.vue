<template>
  <div id="app" class="container">

    <div class="jumbotron">
       <TituloComponent/>
       <NuevaTarea :tareas="lista"/>
       <ListaTareas :tareas="lista"/>
    </div>

    <!-- <titulo-component></titulo-component> -->
   
  </div>
</template>

<script>
import TituloComponent from './components/TituloComponent'
import ListaTareas from './components/ListaTareas'
import NuevaTarea from './components/NuevaTarea'
export default {
  name: 'App',
  components: {
    TituloComponent,
    ListaTareas,
    NuevaTarea
  },
  data() {
    return {
      lista: [
        {
          texto: 'Aprender Vue.js',
          terminada: true
        },
        {
          texto: 'Aprender Django REST',
          terminada: false
        }
      ]
    }
  }
}
</script>

