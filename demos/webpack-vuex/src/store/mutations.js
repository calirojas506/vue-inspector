export default {
  addStudent (state, payload) {
    state.students.push(payload)
  },
  removeStudent (state, payload) {
    state.students.splice(payload, 1)
  }
}
