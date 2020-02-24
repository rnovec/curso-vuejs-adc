<template>
  <nav class="navbar is-right" :class="{'is-fixed-top': isActive}" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="data:image/png;base64,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"
          width="auto" height="auto">
        <span class="nav-title"><strong>AscoMusic</strong></span>
      </a>
      <a class="navbar-burger burger" role="button" :class="{'is-active': isActive}" @click="toggle()" aria-label="menu"
        aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" id="navbarBasicExample" :class="{'is-active': isActive}">
      <div class="navbar-start"></div>
      <div class="navbar-end">
        <router-link tag="a" to="/" class="navbar-item" :class="{'is-active': $route.name == 'Home'}">Home</router-link>
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-danger" v-if="$route.name != 'Login' && authenticated" @click="logout">Logout</a>
            <router-link tag="a" v-else to="/login" class="button is-light">Log in</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    authenticated () {
      return window.localStorage.token
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('track/SET_TRACK', {})
      this.$router.push('/login')
    },
    toggle () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style>
.nav-title {
  padding-left: 10%;
}
</style>
