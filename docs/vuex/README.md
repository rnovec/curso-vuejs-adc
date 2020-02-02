# Vuex Introduction
Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official devtools extension to provide advanced features such as zero-config time-travel debugging and state snapshot export / import.

![](https://miro.medium.com/max/3300/1*ROtQY0XW1itY-76_ufVHww.png)

# Why vuex?
Vuex helps us deal with shared state management with the cost of more concepts and boilerplate. It's a trade-off between short term and long term productivity.
![](https://vuex.vuejs.org/flow.png)

## Normal Vue.js flow

![](https://vuejs.org/images/lifecycle.png)

## Comminicate components
- Parents send data to the child through props
- the child sends data to the parents through events
- Or use the data bus with events


## When to use vuex?

If you've never built a large-scale SPA and jump right into Vuex, it may feel verbose and daunting. That's perfectly normal - if your app is simple, you will most likely be fine without Vuex. A simple store pattern may be all you need. But if you are building a medium-to-large-scale SPA, chances are you have run into situations that make you think about how to better handle state outside of your Vue components, and Vuex will be the natural next step for you. There's a good quote from Dan Abramov, the author of Redux:
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