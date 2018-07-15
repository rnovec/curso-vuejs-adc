<template>
    <div>
        <h3>Informacion del usuario</h3>
        <p><strong>Nombre: </strong>{{nombre}}</p>
        <p><strong>Correo electrónico: </strong>{{email}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nombre: '',
            email: ''
        }
    },
    watch: {
        $route () {
            this.obtenerUsuario()
        }
    },
    created (){
        this.obtenerUsuario()
    },
    methods: {
        obtenerUsuario () {
            var id = this.$route.params.id
            this.$http.get('https://jsonplaceholder.typicode.com/users/' +id)
            .then(respuesta => {
                return respuesta.json()
            })
            .then(usuario => {
                this.nombre = usuario.name
                this.email = usuario.email
            })
        }
    }
}
</script>

