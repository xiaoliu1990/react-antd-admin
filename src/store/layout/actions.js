export const toggleSiderBar = (collapsed) => {
  return (dispatch) => {
    (() => {
      dispatch({
        type: 'toggleSiderBar',
        collapsed
      })
    })()
  }
}

