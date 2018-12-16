
<!-- Cada componente esta compuesto por 3 etiquetas principales -->


<!-- template: contiene nuestro código HTML -->
<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <titulo :titulo="titulo"></titulo>
      <nueva-tarea :tareas="tareas"></nueva-tarea>
      <lista-tareas :tareas="tareas"></lista-tareas>
    </div>
  </div>
</template>


<!-- script: Contiene codigo JS y una instancia para cada componente -->
<script>
import Titulo from "./components/TituloComponent";
import NuevaTarea from "./components/NuevaTareaComponent";
import ListaTareas from "./components/ListaTareasComponent";

// Algo diferente no crees?. Tomate el tiempo para analizarlo.
export default {
  name: "app",
  data() { // retorna nuestras variables
    return {
      titulo: "Lista de Tareas",
      tareas: [
        {
          texto: "Aprender Vue.js",
          terminada: false
        },
        {
          texto: "Aprender Angular 2",
          terminada: false
        },
        {
          texto: "Aprender Ionic 2",
          terminada: false
        }
      ]
    };
  },
  components: { // Componentes hijos
    Titulo,
    NuevaTarea,
    ListaTareas
  }
};
</script>


<!-- style: contiene nuestro código CSS. Esta etiqueta es opcional -->
<style>

</style>

