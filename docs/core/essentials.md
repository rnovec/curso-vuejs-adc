# Essentials

## Expresiones (interpolación)

```html
<div id="app">
  <p>I have a {{ product }}</p>
  <p>{{ product + 's' }}</p>
  <p>{{ isWorking ? 'YES' : 'NO' }}</p>
  <p>{{ product.getSalePrice() }}</p>
</div>
```


## Directivas

### Condicionales

`v-if` & `v-else`
Element inserted/removed based on truthiness:
```html
<p v-if="inStock">{{ product }}</p>
<p v-else-if="onSale">...</p>
<p v-else>...</p>

```
`v-show`
Toggles the display: none CSS property:
```html
<p v-show="showProductDetails">...</p>
```

### Binding
  `v-bind`
```html
<a v-bind:href="url">...</a>
<!-- shorthand -->
<a :href="url">...</a>
```
Two-way data binding:
```html
<input v-model="firstName" >
```

```js
v-model.lazy="..." // Syncs input after change event
v-model.number="..." // Always returns a number
v-model.trim="..." // Strips whitespace
```

### List Rendering
`v-for`
 ```html
<li v-for="item in items" :key="item.id">
    {{ item }}
</li>
```
To access the position in the array:
```html
<li v-for="(item, index) in items">...
```
To iterate through objects:
```html
<li v-for="(value, key) in object">...
```
Using v-for with a component:
```html
<cart-product v-for="item in products"
:product="item" :key="item.id">
```

## Actions / Events

`v-on`
Llamar al método `addToCart`:
```html
<button v-on:click="addToCart">...</button>
<!-- shorthand -->
<button @click="addToCart">...</button>
```

Se pueden pasar argumentos:
```html
<button @click="addToCart(product)">...
```
Para evitar el comportamiento predeterminado (por ejemplo, recarga de página):
```html
<form @submit.prevent="addProduct">...
```

Solo se dispara una vez:
```html
<img @mouseover.once="showImage">...
```
`.stop` Detener toda propagación de eventos

`.self` Solo se dispara si event.target es el elemento mismo

Keyboard entry example:
```html
<input @keyup.enter="submit">
Call onCopy when control-c is pressed:
<input @keyup.ctrl.c="onCopy">
```

Key modifiers:
`.tab`
`.delete`
`.esc`
`.space`
`.up`
`.down`
`.left`
`.right` 
`.ctrl`
`.alt`
`.shift`
`.meta`
`.right` 
`.middle`

## Computed Properties

```js
var app = new Vue({
el: '#app’,  
  data: { 
    x: 0,
    y: 0
  },
  computed: {
    total() {
      return this.x + this.y
    }
  }
})
```

## Componentes

```js
Vue.component('lista-tareas', {
  name: '',
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
  data: () => { // ahora data debe ser una función que retorne un objeto
    return {}
  },
  props: '',
  filter: {},
  watch: {},
  methods: {},
  computed: {}
})
```

### [Computed Properties](https://vuejs.org/v2/guide/computed.html)
