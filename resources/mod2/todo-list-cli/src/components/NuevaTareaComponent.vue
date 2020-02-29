<template>
  <div class="input-group">
    <input
      type="text"
      placeholder="Escribe una nueva tarea"
      v-model="nuevaTarea"
      class="form-control"
      @keyup.enter="agregarTarea()"
    />
    <span class="input-group-btn">
      <button type="button" @click="agregarTarea()" class="btn btn-primary">
        Agregar
      </button>
    </span>
  </div>
</template>

<script>
import { bus } from "../main.js";
export default {
  data() {
    return {
      nuevaTarea: ""
    };
  },
  props: {
    tareas: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    agregarTarea() {
      var texto = this.nuevaTarea.trim();
      if (texto) {
        this.tareas.push({
          texto: texto,
          terminada: false
        });
        bus.actualizarContador(this.tareas.length);
      }
      this.nuevaTarea = "";
    }
  },
  created() {
    bus.actualizarContador(this.tareas.length);
  }
};
</script>
