<template>
<div>
  <h2>{{ titulo }}</h2>
  <h3>Tareas por hacer: {{ numTareas }}</h3>
</div>
</template>

<script>
import { bus } from '../main.js'
export default {
  data() {
    return {
      numTareas: 0
    }
  },
  props: {
    titulo: {
      type: String,
      default: ''
    },
    tareas: {
      type: Array
    }
  },
  created() {
    bus.$on('actualizarContador', (numTareas) => {
      this.numTareas = numTareas
    })
  }
}
</script>
