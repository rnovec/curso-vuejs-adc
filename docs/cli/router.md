# Enrutamiento
```js
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/HelloWorld";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home // importacion desde una variable
  },
  {
    path: "/todo-list",
    name: "TodoList",
    component: () => import('@/views/TodoList') // importación directa
  }
];

const router = new VueRouter({
  mode: 'history', // por defecto es hash
  routes
});

export default router;

```

# Peticiones HTTP

    $ npm i axios


## Recursos
[Lista de Tareas](https://github.com/ascodecodigo/TodoList/releases/tag/v2.1.0)