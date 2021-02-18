const initialState = {
  number: 0
}
function index (state = initialState, action) {
  switch (action.type) {
    case 'add':
      return { ...state, number: action.count + 1 }
    case 'reduce':
      return { ...state, number: action.count - 1 }
    default:
      return state
  }
}
export default index