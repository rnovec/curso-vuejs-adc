<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo" :tareas="tareas"></titulo>
        <nueva-tarea :tareas="tareas">
      </nueva-tarea> 
      <lista-tareas :tareas="tareas"></lista-tareas>
    </div>
  </div>
</template>

<script>
import Titulo from './components/TituloComponent'
import NuevaTarea from './components/NuevaTareaComponent'
import ListaTareas from './components/ListaTareasComponent'
export default {
  name: 'app',
  data () {
    return {
      titulo: 'Lista de Tareas',
      tareas: [
        {
            texto: 'Aprender Vue.js',
            terminada: false
        },
        {
            texto: 'Aprender Angular 2',
            terminada: false
        },
        {
            texto: 'Aprender Ionic 2',
            terminada: false
        }
    ],
    }
  },
  components: {
    Titulo,
    NuevaTarea,
    ListaTareas
  }
}
</script>
