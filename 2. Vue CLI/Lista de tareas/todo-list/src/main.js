// Importacion de librerias en Vue
import Vue from 'vue' // dependencia principal
import App from './App.vue' // requerir archivos

// podemos crear multiples instancias para diferentes propósitos
export var bus = new Vue({
  methods: {
    actualizarContador(numTareas) {
      this.$emit('actualizarContador', numTareas)
    }
  }
})

// instancia principal
new Vue({
  el: '#app',
  render: h => h(App) // renderiza nuestro componente App.vue
})
