# CLI

Instalar [Node.js](https://nodejs.org/es/download/)

    $ node -v
    $ npm -v # yarn

Instalar vue-cli

    $ npm i -g @vue/cli
    $ vue -V

## Crear un proyecto

    $ vue create my-app
    $ npm run serve
    $ npm run build

## Estructura
```
├── babel.config.js
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   └── index.html
├── README.md
└── src
    ├── App.vue
    ├── assets
    │   └── logo.png
    ├── components
    │   └── HelloWorld.vue
    └── main.js

4 directories, 10 files
```


## Single File Components
```vue
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```

## Plugins
    $ vue add <PLUGIN>

## Recursos

- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [Vue Plugins](https://awesomejs.dev/for/vue-cli/)
- [Icons](https://www.w3schools.com/icons/fontawesome_icons_intro.asp)

# Clase
[Lista de tareas](https://github.com/ascodecodigo/TodoList/releases/tag/v2.0.0)

