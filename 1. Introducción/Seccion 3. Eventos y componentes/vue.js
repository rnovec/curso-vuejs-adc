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
  </table>
    `,
    data: function () {
        return {
            
        }
    }
})

var app = new Vue ({
    el: '#app',
    data: {
        titulo: 'Bienvenido al curso de Vue jS 2 - ADC',
        jumbo: 'jumbotron',
        mostrar: false,
        contenido: ` <h3>Este es el segundo contenido</h3>
        <p>Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Commodi quisquam officia
             amet porro animi. Similique maiores exercitationem 
             libero ducimus quis rerum obcaecati ut, quibusdam magni
              nisi maxime molestiae optio dignissimos?</p>`,
        cabecera:['#','Nombre','Correo','Telefono'],
        usuarios: [
            {
                nombre: 'Jordan',
                correo: 'jordan@gmail.com',
                telefono: 9992671562
            },
            {
                nombre: 'Dario',
                correo: 'Dario@gmail.com',
                telefono: 9992612321
            },
            {
                nombre: 'Raul',
                correo: 'Raul@gmail.com',
                telefono: 99926112233
            }
            
        ],
        nombre:'',
        x:0,
        y:0
    
        
    },
    methods: {
        mostrarTitulo () {
            return 'Introducción a Vue con ADC'
        },
        agregarUsuario(){
            if(this.nombre) {
               this.usuarios.push(
                   {nombre: this.nombre , correo: 'ejemplo@hotmail.com', telefono:99999999 }
               )
            }
        },
        mostrarNombre(nombre,event){
            this.nombre = nombre
            this.x = event.clientX
            this.y =event.clientY
            console.log(event)
        },
        alerta()
        {
            alert('has dado click')
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
        console.log('Montada')        
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
        console.log('Destruida')
        alert('Destruido')
    }
})