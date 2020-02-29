<template>
  <ul class="list-group">
    <li
      v-for="(tarea, indice) of tareas"
      class="list-group-item"
      :key="indice"
      v-bind:class="{ terminada: tarea.terminada }"
    >
      {{ tarea.texto }}
      <span class="pull-right">
        <button
          type="button"
          class="btn btn-success btn-sm"
          @click="tarea.terminada = !tarea.terminada"
        ><i class="fa fa-check"></i></button>
        &nbsp;
        <button
          type="button"
          class="btn btn-danger btn-sm"
          @click="borrar(indice)"
        ><i class="fa fa-times"></i></button>
      </span>
    </li>
  </ul>
</template>

<script>
import { bus } from "../main.js";
export default {
  props: ["tareas"],
  methods: {
    borrar: function(indice) {
      this.tareas.splice(indice, 1);
      bus.actualizarContador(this.tareas.length);
    }
  }
};
</script>

<style>
.terminada {
  color: gray;
  text-decoration: line-through;
}
</style>
