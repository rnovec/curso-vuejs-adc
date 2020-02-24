<template>
  <AppBanner>
    <div class="column is-4 is-offset-4">
      <h3 class="title">Login</h3>
      <p class="subtitle">Please login to proceed.</p>
      <div class="box">
        <main>
          <form @submit.prevent="login">
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  v-model="email"
                  type="email"
                  placeholder="Email"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input"
                  v-model="password"
                  type="password"
                  placeholder="Password"
                  required
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <button type="submit" class="button is-info">Login</button>
                <a :href="'https://adc-spotify-api.herokuapp.com/spotify?redirect=' + domain + '/login'" class="button is-success">Login with Spotify</a>
              </p>
            </div>
          </form>
        </main>
      </div>
      <p>
        <a href="../">Sign Up</a> &nbsp;·&nbsp;
        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
        <a href="../">Need Help?</a>
      </p>
    </div>
  </AppBanner>
</template>

<script>
import { login } from "@/api/user";
export default {
  data() {
    return {
      domain: window.location.origin,
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$router.push('/')
    }
  },
  created() {
    this.$store.commit('track/SET_TRACK', {})
    let code = this.$route.query.code
    if (code) {
      window.localStorage.setItem('token', code)
      this.$router.push('/')
    }
  },
  components: {
    AppBanner: () => import("@/layout/AppBanner")
  }
};
</script>
