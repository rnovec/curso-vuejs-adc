const state = {
  currentTrack: {}
}

const getters = {
  getTitle (state) {
    if (!state.currentTrack.name) {
      return ''
    }
    return `${state.currentTrack.name} - ${state.currentTrack.artists[0].name}`
  }
}

const mutations = {
  SET_TRACK (state, track) {
    state.currentTrack = track
  }
}

const actions = {}

export const track = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
