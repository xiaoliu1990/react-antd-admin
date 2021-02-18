const initialState = {
  collapsed: false
}
function layout (state = initialState, action) {
  switch (action.type) {
    case 'toggleSiderBar':
      return { ...state, collapsed: !state.collapsed }
    default:
      return state
  }
}
export default layout