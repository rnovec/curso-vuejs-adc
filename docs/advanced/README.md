# Plugins & Servicios
```js
MyPlugin.install = function (Vue, options) {
  // 1. agregar método global o propiedad
  Vue.myGlobalMethod = function () {
    // algo de lógica...
  }

  // 2. agregar un recurso global
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // algo de lógica...
    }
    ...
  })

  // 3. inyectar algunas opciones de componentes
  Vue.mixin({
    created: function () {
      // algo de lógica...
    }
    ...
  })

  // 4. agregar un método de instancia
  Vue.prototype.$myMethod = function (methodOptions) {
    // algo de lógica...
  }
}
```

# Filtros
```js
const msToMm = {}

function convertMsToMm (ms) {
  const min = Math.floor(ms / 60000)
  const sec = ((ms % 60000) / 1000).toFixed(0)

  return `${min}:${sec < 10 ? `00` : sec} min`
}

msToMm.install = function (Vue) {
  Vue.filter('msToMm', val => {
    return convertMsToMm(val)
  })
}

export default msToMm

```

# Mixins
```js
const myOwnMixin = {
  data() {
    return {} 
  },
  methods: {},
  computed: {}
  }
}

export default myOwnMixin
```


# Directivas
```js
const blur = {}

function setBlur (el, binding) {
  el.style.filter = !binding.value ? 'blur(3px)' : '(none)'
  el.style.filter = !binding.value ? 'not-allowed' : 'inherit'

  el.querySelectorAll('a').forEach(element => {
    if (!binding.value) {
      element.setAttribute('disabled', true)
    } else {
      element.removeAttribute('disabled')
    }
  })
}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding) {
      setBlur(el, binding)
    }
  })
}

export default blur
```


# Watchers
```js
export default {
    data() {
      return {
        value: 0
      }
    },
    watch: {
        value(val) {
            console.log('algo ha cambiado!!!')
        }
    }
}
```