export default {
  getStudents (state) {
    return state.students
  },
  getTotalStudents (state) {
    return state.students.length
  },
  getApprovedStudents (state) {
    return state.students.filter(el => {
      return el.approved === true
    })
  },
  getNotApprovedStudents (state) {
    return state.students.filter(el => {
      return el.approved === false
    })
  }
}
