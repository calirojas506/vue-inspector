export default {
  addStudent (context, info) {
    context.commit('addStudent', info)
  },
  deleteStudent (context, student) {
    context.commit('removeStudent', student)
  }
}
