var product = 'Socks'

var app = new Vue({
  el: '#app',
  data: {
    brand: 'My Store',
    product: 'Tech',
    selectedVariant: 0,
    altText: 'A pair of power banks',
    link: 'https://www.bing.com',
    details: ['2000 mhA', 'Digital screen', 'flashlight'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'yellow',
        variantImage: 'power-bank-ama.jpg',
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: 'power-bank-azul.jpg',
        variantQuantity: 0
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function () {
      if (this.variants[this.selectedVariant].variantQuantity > 0) {
        this.variants[this.selectedVariant].variantQuantity -= 1
        this.cart += 1
      }
    },
    removeFromCart: function () {
      if (this.cart > 0) {
        this.variants[this.selectedVariant].variantQuantity += 1
        this.cart -= 1
      }
    },
    updateProduct: function (index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title: function () {
      return this.brand + ' ' + this.product
    },
    image: function () {
      return this.variants[this.selectedVariant].variantImage
    },
    inventory: function () {
      return this.variants[this.selectedVariant].variantQuantity
    },
    inStock: function () {
      return this.variants[this.selectedVariant].variantQuantity > 0
    }
  }
})
