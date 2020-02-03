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

## ACTIONS / EVENTS

`v-on`
Calls addToCart method on component:
```html
<button v-on:click="addToCart">...</button>
<!-- shorthand -->
<button @click="addToCart">...</button>
```

Arguments can be passed:
```html
<button @click="addToCart(product)">...
```
To prevent default behavior (e.g. page reload):
```html
<form @submit.prevent="addProduct">...
```

Only trigger once:
```html
<img @mouseover.once="showImage">...
```
`.stop` Stop all event propagation

`.self` Only trigger if event.target is element itself

Keyboard entry example:
<input @keyup.enter="submit">
Call onCopy when control-c is pressed:
<input @keyup.ctrl.c="onCopy">


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

## Hooks
### [Computed Properties](https://vuejs.org/v2/guide/computed.html)
