<template>
    <div>
        <h3>Lista de Usuarios</h3>
        <ul class="list-group">
            <router-link tag="li" 
             :to="{name:'infousuario', params: {id: usuario.id}}" 
               class="list-group-item"
              v-for="usuario in usuarios"
              :key="usuario.id"> {{usuario.name}}</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data () {
        return {
          usuarios: {}
        }
    },
    created() {
        this.obtenerUsuarios()
    },
    methods: {
        obtenerUsuarios () {
            this.$http.get('https://jsonplaceholder.typicode.com/users/')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(usuarios=> {
                this.usuarios = usuarios
            })
        }
    }
}
</script>

