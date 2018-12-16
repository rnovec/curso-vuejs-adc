// Declaración de un componente con su plantilla html correspondiente
Vue.component('table-component', {
    template: `
    <table class="table table-sm table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>`,
  data: function () {
      return {
      }
  },
})

/**
 * Aqui inicia nuestra instancia de Vue
 */
var app = new Vue({
    el: '#app', // indica el <div> en el cual queremos utilizar vue class: `#app` o id: `.app`
    data: { // hook mas importante, retorna las variables de nuestra instancia
        titulo: 'Bienvenido al curso de Vue JS 2'
    },
    methods: { // hook de declaración de metodos
        mostrarTitulo() {
            return 'Introducción a Vue js'
        }
    },
    /** Ciclo de Vida
     * Nos ayuda a manipular nuestro componente
     * Desde trear informacion antes de que se carge el componente
     * hasta provocar la destrucción del mismo manualmente
     */
    beforeCreate() {
        console.log('Antes de crear')
    },
    created() {
        console.log('Creado')
        // this.$destroy() // manera de llamar manualmente a un hook especifico. `$` indica que es no es un método propio
    },
    beforeMount() {
        console.log('Antes de montar')
    },
    mounted() {
        console.log('Montado')
    },
    beforeUpdate() {
        console.log('Antes de actualizar')
    },
    updated() {
        console.log('Actualizado')
    },
    beforeDestroy() {
        console.log('Antes de destruir')
    },
    destroyed() {
        alert('Bienvenido!')
        console.log('Destruido')
    }
})