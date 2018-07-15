<template>
  <div class="jumbotron">
    <div class="col-md-6">
      <h1>Formulario</h1>
      <form>
        <div class="form-group">
          <label for="nombre">Nombre</label>
            <input type="text" class="form-control" placeholder="Nombre"
                    v-model.trim="usuario.nombre">
              <!-- Modificador trim elimina los espacios despues del nombre-->
        </div>
        <div class="form-group">
          <label for="correo">Correo Electrónico</label>
          <input type="email" class="form-control" placeholder="Correo Electrónico"
                  v-model.lazy="usuario.correo">
                  <!-- Modicador lazy hace el enlace al final o cambio de campo-->
        </div>
        <div class="form-group">
          <label for="clave">Contraseña</label>
          <input type="password" class="form-control" placeholder="Contraseña"
                  v-model="usuario.clave">
        </div>
        <div class="form-group">
          <label for="edad">Edad</label>
          <input type="text" class="form-control" placeholder="Edad"
                  v-model.number="usuario.edad">
          <!-- Modificador number cambio el tipo de valor -->
        </div>
        <div class="form-group">
          <label for="pais">Pais</label>
          <select class="form-control" v-model="usuario.pais">
            <option v-for="pais in paises">{{ pais }}</option>
          </select>
        </div>

        <div class="form-group">
          <label for="mensaje">Mensaje</label>
          <textarea class="form-control" rows="3"
                    v-model="usuario.mensaje"></textarea>
        </div>

        <fieldset class="form-group">
          <legend>Género</legend>
          <div class="form-check">
            <label class="form-check-label">
              <input type="radio" class="form-check-input" 
                      name="optionsRadios" value="hombre"
                      v-model="usuario.genero">
              Hombre
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input type="radio" class="form-check-input" 
                      name="optionsRadios" value="mujer"
                      v-model="usuario.genero">
              Mujer
            </label>
          </div>
        </fieldset>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input"
                    value="acepto" v-model="usuario.condiciones">
            Acepto las condiciones
          </label>
        </div>
        <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input"
                      value="newsletter" v-model="usuario.condiciones">
              Recibir la newsletter
            </label>
          </div>
        <button class="btn btn-primary"
        @click.prevent="enviarFormulario">Enviar</button>
        <!-- modificador prevent previene 
          que se envie el formulario prematuramente -->
      </form>
    </div>
    <div class="resultados col-md-6" v-if="mostrar">
      <h1>Resultados</h1>
      <p><strong>Nombre: </strong>{{ usuario.nombre }} - {{usuario.nombre.length}}</p>
      <p><strong>Correo Electrónico: </strong>{{ usuario.correo }}</p>
      <p><strong>Contraseña: </strong>{{ usuario.clave }}</p>
      <p><strong>Edad: </strong>{{ usuario.edad }} - {{ typeof usuario.edad }}</p>
      <p><strong>País: </strong>{{ usuario.pais }}</p>
      <p class="mensaje"><strong>Mensaje: </strong>{{ usuario.mensaje }}</p>
      <p><strong>Género: </strong>{{ usuario.genero }}</p>
      <p><strong>Condiciones: </strong>{{ usuario.condiciones }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      usuario: {
        nombre : '',
        correo : '',
        clave : '',
        edad : '',
        pais : '',
        genero : '',
        condiciones : []
      },
      mostrar : false, // resultados invisibles
      paises: [
        'Argentina', 'Bolivia',
        'Brasil', 'Chile',
        'Colombia', 'Ecuador',
        'España', 'México',
        'Paraguay', 'Uruguay',
        'Venezuela'
      ]
    }
  },
  // Visibiliza los resultados
  methods: {
      enviarFormulario() {
        this.mostrar = true
      }
    }
}
</script>

<style>
/* Para que acepte los saltos de linea
en el mensaje*/
.mensaje {
  white-space: pre;
}
</style>