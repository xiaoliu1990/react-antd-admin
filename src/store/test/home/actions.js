export const add = (count) => {
  return (dispatch) => {
    (() => {
      dispatch({
        type: 'addHome',
        count
      })
    })()
  }
}
export const reduce = (count) => {
  return (dispatch) => {
    (() => {
      dispatch({
        type: 'reduceHome',
        count
      })
    })()
  }
}

export const httpAsk = (res) => {
  return (dispatch) => {
    (() => {
      dispatch({
        type: 'ajaxHome',
        res
      })
    })()
  }
}