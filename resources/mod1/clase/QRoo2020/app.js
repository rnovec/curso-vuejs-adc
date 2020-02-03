var app = new Vue({
  el: '#app',
  data: {
    message: 'Hola Mundo!',
    active: true,
    products: []
  },
  computed: {
    total () {
      return this.products.reduce((sum, item) => {
        return sum + item.quantity
      }, 0)
    }
  },
  methods: {
    addStock (item) {
      item.quantity++
    }
  },
  created () {
    fetch('https://api.myjson.com/bins/74l63')
      .then(res => res.json())
      .then(json => {
        this.products = json.products
      })
  }
})
