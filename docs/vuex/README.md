# Vuex Introduction
Vuex es un patrón de gestión de estado + biblioteca para aplicaciones Vue.js. Sirve como una tienda centralizada para todos los componentes de una aplicación, con reglas que aseguran que el estado solo pueda mutarse de manera predecible. También se integra con la extensión de devtools oficial de Vue para proporcionar funciones avanzadas como la depuración de viaje en el tiempo de configuración cero y la exportación / importación de instantáneas de estado.

![](https://miro.medium.com/max/3300/1*ROtQY0XW1itY-76_ufVHww.png)

# ¿Por qué vuex?
Vuex nos ayuda a lidiar con la administración de estado compartida con el costo de más conceptos y repeticiones. Es una compensación entre la productividad a corto y largo plazo.
![](https://vuex.vuejs.org/flow.png)

## Comunicación entre componentes
- El padre envían datos al hijo a través de props
- Los hijos envía datos a los padres a través de eventos
- Bus de datos


## ¿Cuando usar Vuex?

Si nunca ha construido un SPA a gran escala y se lanza directamente a Vuex, puede parecer vergonzoso y desalentador. Eso es perfectamente normal: si su aplicación es simple, lo más probable es que esté bien sin Vuex. Un patrón de tienda simple puede ser todo lo que necesita. Pero si está construyendo un SPA de mediana a gran escala, es probable que se haya topado con situaciones que lo hagan pensar en cómo manejar mejor el estado fuera de sus componentes Vue, y Vuex será el próximo paso natural para usted. Hay una buena cita de Dan Abramov, el autor de Redux:

> *Flux libraries are like glasses: you’ll know when you need them.*

## ¿Como empezar?

```js
// store.js
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tareas: [
      {
        texto: "Aprender Vue.js",
        terminada: false
      },
      {
        texto: "Aprender Angular 2",
        terminada: false
      },
      {
        texto: "Aprender Ionic 2",
        terminada: false
      }
    ]
  },
  getters: {
    numTareas: state =>
      state.tareas.reduce((accumulator, tarea) => {
        if (!tarea.terminada) ++accumulator
        return accumulator
      }, 0)
  },
  mutations: {},
  actions: {}
})

export default store

```


# Actions & Mutations
```js
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
```
# Módulos & Namespaces

```js
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> `moduleA`'s state
store.state.b // -> `moduleB`'s state
```

![](https://vuex.vuejs.org/vuex.png)

## ¿Como se accede al Store?
- Global
  - template
  ```html
  <template>
    <h1>{{ $store.state.count }}</h1>
  </template>
  ```
  - script
  ```js
  export default {
    created() {
      this.$store.state.count
      this.$store.commit('some-mutations')
      this.$store.dispatch('some-action')
    }
  }
  ```

- Desde los módulos de vuex
  ```js
  import { mapState, mapActions, mapMutations } from 'vuex'
  export default {
    computed: {
      ...mapState(['tareas']) // se mezcla con las computed y data
    },
    created() {
      this.tareas // como is fuera un variable de instancia
    }
  }
  ```