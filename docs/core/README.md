# Introducción
![](http://tutorialesenpdf.com/wp-content/uploads/2018/05/vuejs-tutorial-pdf.jpg)

> **Vue** es considerado un framework progresivo, esto quiere decir, que es capaz de adaptarse al tamaño de cada proyecto a la perfección. Tanto así, que si estamos trabajando en una sencilla *landing page* no necesitamos descargar e instalar todo el core de Vue y su CLI; basta con utilzar su **CDN** en nuestro index.html y estamos listos para utilizar las herramientas básicas que nos ofrece vue para hacer nuestra página dinámica.

## CDN

``` html
<script src="https://unpkg.com/vue"></script>
```

## Instancia

```js
var app = new Vue({
el: '#app’,  
  data: { // indica el <div> en el cual queremos utilizar vue class: `#app` o id: `.app`
    mensaje: 'Hello World!' // hook mas importante, retorna las variables de nuestra instancia
  }
})
```

## Ganchos de cliclo de vida

`beforeCreate`
`created`
`beforeMount`
`mounted`
`beforeUpdate`
`updated`
`beforeDestroy`
`destroyed`

![](https://vuejs.org/images/lifecycle.png)

### app.js

```js
/**
 * Aqui inicia nuestra instancia de Vue
 */
var app = new Vue({
        el: '#app', 
        data: { 
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
    }
}
```

### index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">

    <!-- development version, includes helpful console warnings -->
    <script src="https://unpkg.com/vue"></script>
    <title>Introducción a Vue JS 2</title>
</head>

<body>
    <div id="app">
        <div class="container">
            <div class="jumbotron">
                <!-- Interpolacion de variables/funciones para 
                mostrar su valor como un string -->
                <h3>{{ mostrarTitulo() }}</h3>
            </div>
        </div>
    </div>

    <!-- Importa el archivo de JavaScript -->
    <script src="app.js"></script>
</body>

</html>
```

