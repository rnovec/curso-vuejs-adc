/**
 * TODO: Crear la instancia principal de vue pasando la variable data.
 * TODO: Crear el componente nueva-tarea que contendra el div con el input y el botón para agregar una nueva tarea.
 * TODO: Dentro de nueva-tarea crear un método para agregar una tarea al arreglo.
 * TODO: Por último, crear el componente lista-tareas con un método para marcar una tarea como terminada y otro para borrar una tarea.
 */
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
        },
    ],
    nuevaTarea: ''
}

Vue.component('titulo', {
    template: '<h2>{{ titulo }}</h2>',
    data: function () {
        return { 
            titulo: "Lista de Tareas" 
        }
    }
})