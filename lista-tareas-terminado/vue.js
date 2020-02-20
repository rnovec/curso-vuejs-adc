var data = {
  tareas: [
    {
      texto: 'Aprender Vue.js',
      terminada: false
    },
    {
      texto: 'Aprender Angular 2',
      terminada: false
    },
    {
      texto: 'Aprender Ionic 2',
      terminada: false
    }
  ],
  nuevaTarea: ''
}

Vue.component('titulo', {
  template: '<h2>{{ titulo }}</h2>',
  data: function () {
    return { titulo: 'Lista de Tareas' }
  }
})

Vue.component('nueva-tarea', {
  template: `
      <div class="input-group">
            <input type="text" 
            placeholder="Escribe una nueva tarea" 
            v-model="nuevaTarea" 
            class="form-control" v-on:keyup.enter="agregarTarea()">
            <span class="input-group-btn">
                <button type="button" 
                v-on:click="agregarTarea()"
                class="btn btn-primary">Agregar</button>
            </span>
        </div>
  `,
  data: function () {
    return data
  },
  methods: {
    agregarTarea: function () {
      var texto = this.nuevaTarea.trim()
      if (texto) {
        this.tareas.push({
          texto: texto,
          terminada: false
        })
      }
      this.nuevaTarea = ''
    }
  }
})

Vue.component('lista-tareas', {
  template: `
        <ul class="list-group">
            <li v-for="(tarea, indice) of tareas" class="list-group-item" 
               v-bind:class="{terminada: tarea.terminada }">
                {{ tarea.texto }}
                <span class="pull-right">
                    <button type="button" class="btn btn-success btn-xs glyphicon glyphicon-ok"
                        v-on:click="tarea.terminada = !tarea.terminada"
                    ></button>
                    <button type="button" class="btn btn-danger btn-xs glyphicon glyphicon-remove"
                        v-on:click="borrar(indice)"
                    ></button>
                </span>
            </li>
        </ul>
    `,
  data: function () {
    return data
  },
  methods: {
    borrar: function (indice) {
      this.tareas.splice(indice, 1)
    }
  }
})

var app = new Vue({
  el: '#app',
  data: data
})
