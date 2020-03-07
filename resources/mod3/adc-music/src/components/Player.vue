<template>
  <div
    class="content"
    v-if="currentTrack && currentTrack.album && currentTrack.preview_url"
  >
    <p class="is-128x128"><img :src="currentTrack.album.images[0].url" /></p>
    <p>
      <strong>{{ currentTrack.name }} - {{ currentTrack.artists[0].name }}</strong>
      <br />
      <small>[{{ currentTrack.duration_ms | msToMm() }}]</small>
    </p>
    <figure>
      <audio controls autoplay :src="currentTrack.preview_url">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </figure>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState("track", ["currentTrack"]),
    track() {
      return this.$store.state.track.currentTrack;
    }
  }
};
</script>

<style lang="scss" scoped>
audio {
  height: 40px;
}
img {
  width: 200px;
  border-radius: 50%;
}
</style>
