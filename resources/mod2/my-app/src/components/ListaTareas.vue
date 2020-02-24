<template>
  <ul class="list-group">
    <li
      v-for="(tarea, index) in tareas"
      :key="index"
      :class="{ terminada: tarea.terminada }"
      class="list-group-item"
    >
      {{ tarea.texto }}
      <span class="pull-right">
        <button
          type="button"
          @click="tarea.terminada = !tarea.terminada"
          class="btn btn-success btn-sm"
        >
          <i class="fa fa-check"></i>
        </button>
        &nbsp;
        <button
          type="button"
          @click="borrarTarea(index)"
          class="btn btn-danger btn-sm"
        >
          <i class="fa fa-times"></i>
        </button>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tareas: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    borrarTarea(index) {
      this.tareas.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.terminada {
  color: gray;
  text-decoration: line-through;
}
</style>
