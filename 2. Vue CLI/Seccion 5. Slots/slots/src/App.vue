<template>
  <div class="container">
    <div class="jumbotron">
      <button class="btn btn-primary" @click="componenteSeleccionado = 'iniciarSesion'">Iniciar Sesion</button>
      <button class="btn btn-primary" @click="componenteSeleccionado = 'cambiarClave'"> Cambiar Contraseña</button>
    <component :is="componenteSeleccionado"></component>
   </div>
 </div>
</template>

<script>
import MostrarFormulario from './components/MostrarFormulario'
import IniciarSesion from './components/IniciarSesion'
import CambiarClave from './components/CambiarClave'
export default {
  components: {
    mostrarFormulario: MostrarFormulario,
    iniciarSesion: IniciarSesion,
    cambiarClave: CambiarClave
  },
  data () {
    return {
      componenteSeleccionado: 'iniciarSesion'
    }
  }
}
</script>
<style>
 
</style>

