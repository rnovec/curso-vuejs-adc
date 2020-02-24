# Vuex Introduction
Vuex es un patrón de gestión de estado + biblioteca para aplicaciones Vue.js. Sirve como una tienda centralizada para todos los componentes de una aplicación, con reglas que aseguran que el estado solo pueda mutarse de manera predecible. También se integra con la extensión de devtools oficial de Vue para proporcionar funciones avanzadas como la depuración de viaje en el tiempo de configuración cero y la exportación / importación de instantáneas de estado.

![](https://miro.medium.com/max/3300/1*ROtQY0XW1itY-76_ufVHww.png)

# ¿Por qué vuex?
Vuex nos ayuda a lidiar con la administración de estado compartida con el costo de más conceptos y repeticiones. Es una compensación entre la productividad a corto y largo plazo.
![](https://vuex.vuejs.org/flow.png)

## Componentes conminutos
- Los padres envían datos al niño a través de accesorios
- el niño envía datos a los padres a través de eventos
- O use el bus de datos con eventos


## When to use vuex?

Si nunca ha construido un SPA a gran escala y se lanza directamente a Vuex, puede parecer vergonzoso y desalentador. Eso es perfectamente normal: si su aplicación es simple, lo más probable es que esté bien sin Vuex. Un patrón de tienda simple puede ser todo lo que necesita. Pero si está construyendo un SPA de mediana a gran escala, es probable que se haya topado con situaciones que lo hagan pensar en cómo manejar mejor el estado fuera de sus componentes Vue, y Vuex será el próximo paso natural para usted. Hay una buena cita de Dan Abramov, el autor de Redux:
> Flux libraries are like glasses: you’ll know when you need them.

## How to start we
      state.count++
    }
  }
})
```


# ACTIONS => DISPATCH
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
# MODULES & NAMESPACES

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
## How access to STORE?
- GLOBAL
- MODULE IMPORTS