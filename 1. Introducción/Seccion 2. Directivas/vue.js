Vue.component('table-component', {
    template: `
    <table class="table">
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
      </table>`
})

var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Bienvenido al curso de Vue JS 2',
        jumbo: 'jumbotron',
        mostrar: false,
        button: `<button type="button" class="btn btn-secondary btn-sm">Button</button>`,
        cabeceras: ['#', 'Nombre', 'Correo', 'Telefono'],
        usuarios: [
            {
                nombre: 'Raul',
                telefono: 9999911,
                correo: '@twitter'
            },
            {
                nombre: 'Dario',
                telefono: 99891910101,
                correo: '@facebook'
            },
            {
                nombre: 'Jordan',
                telefono: 551110101,
                correo: '@ask.fm'
            }
        ]
    },
    methods: {
        mostrarTitulo() {
            return 'Introducción a Vue js'
        }
    },
    beforeCreate() {
        console.log('Antes de crear')
    },
    created() {
        console.log('Creado')
        // this.$destroy()
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
        alert('Destruido!')
        console.log('Destruido')
    }
})