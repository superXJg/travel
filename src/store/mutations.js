export default {
  handleCity (state, val) {
    state.city = val
    try {
      localStorage.city = val
    } catch (e) {}
  }
}
