<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <h3>POST</h3>
      <subir-post></subir-post>
    </div>
    <div class="jumbotron">
      <h3>GET</h3>
      <b-table striped hover :items="items"></b-table>
    </div>
  </div>
</template>

<script>
import SubirPost from './components/SubirPost'
  export default {
    data () {
      return {
        items: []
      }
    },
    components: {
      SubirPost
    },
    methods: {
      obtenerUsuarios() {
        this.$http.get('https://jsonplaceholder.typicode.com/users')
          .then(respuesta => respuesta.json())
          .then(respuesta => this.items = respuesta)
          .catch(error => console.log(res))
      }
    },
    created() {
      this.obtenerUsuarios()
    }
  }
</script>