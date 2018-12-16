<template>
  <div class="container">
    <div class="jumbotron">
      <mostrarFormulario>
        <div slot="titulo">
        <h3>Iniciar Sesión</h3>
        </div>
        <div slot="elementos">
          <div class="form-group">
            <label for="correo">Correo Electrónico</label>
            <input type="email" class="form-control" id="correo"
            placeholder="Escribe tu correo electrónico">
        </div>
        <div class="form-group">
            <label for="clave">Contraseña</label>
            <input type="password" class="form-control" id="clave"
            placeholder="Escribe tu contraseña">
        </div>
        </div>
        <div slot="boton">
        <button class="btn btn-primary"> Iniciar Sesión</button>
        </div>
      </mostrarFormulario>

   </div>
 </div>
</template>

<script>
import MostrarFormulario from './MostrarFormulario'
export default {
  components: {
    mostrarFormulario: MostrarFormulario
  },
  data () {
    return {
      
    }
  }
}
</script>
<style>
 
</style>
