<template>
  <section class="section">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          class="input is-large"
          @keyup.enter="search"
          v-model="searchQuery"
          type="text"
          placeholder="Search songs..."
        />
      </div>
      <p class="control">
        <a class="button is-large is-info" @click="search">
          <span class="icon is-large">
            <i class="fas fa-search"></i>
          </span>
        </a>
      </p>
      <p class="control">
        <a class="button is-large is-danger" @click="searchQuery = ''">
          <span class="icon is-large">
            <i class="fas fa-times"></i>
          </span>
        </a>
      </p>
    </div>
    <div class="columns is-multiline">
      <div class="column is-one-quarters" v-for="(t, i) in tracks" :key="i">
        <track-card v-blur="t.preview_url" :track="t"></track-card>
      </div>
    </div>
  </section>
</template>

<script>
import { searchTrack } from "@/api/track";

export default {
  name: "Search",
  data() {
    return {
      searchQuery: "rock",
      tracks: []
    };
  },
  components: {
    TrackCard: () => import("@/components/TrackCard")
  },
  methods: {
    search() {
      this.tracks = [];
      searchTrack(this.searchQuery)
        .then(res => res.tracks) // equivalente a return res.tracks
        .then(res => {
          console.log(res);
          this.tracks = res.items;
          this.searchQuery = "";
        });
    }
  }
};
</script>
