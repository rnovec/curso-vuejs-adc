<template>
  <div class="input-group">
    <input type="text" v-model="nuevaTarea" class="form-control" />
    <span class="input-group-btn">
      <button class="btn btn-primary" @click="agregarTarea()">Agregar</button>
    </span>
  </div>
</template>

<script>
export default {
  props: ["tareas"],
  data() {
    return {
      nuevaTarea: ""
    };
  },
  methods: {
    agregarTarea() {
      this.tareas.push({
        texto: this.nuevaTarea,
        terminada: false
      });
    }
  }
};
</script>
