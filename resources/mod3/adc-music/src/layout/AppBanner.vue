<template>
    <section class="hero is-success is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <slot/>
          <Player v-show="$route.name !== 'Login'"/>
        </div>
      </div>
    </section>
</template>

<script>
import Player from '@/components/Player'
export default {
  components: {
    Player
  }
}
</script>
