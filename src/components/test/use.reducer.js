const initialState = { count: 0 };
function reducer(initialState, action) {
  switch (action.type) {
    case 'increment':
      return { count: initialState.count + 1 };
    case 'decrement':
      return { count: initialState.count - 1 };
    default:
      throw new Error();
  }
}
export { initialState, reducer };