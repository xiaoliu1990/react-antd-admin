const initialState = {
  numberHome: 0,
  res:{}
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'addHome':
      return { ...state, numberHome: action.count + 1 }
    case 'reduceHome':
      return { ...state, numberHome: action.count - 1 }
    case 'ajaxHome':
      return { ...state, res: action.res }
    default:
      return state
  }
}
