export default (type, defaultState = {}) => (state = defaultState, action) => {
  switch (action.type) {
    case type:
      return action.payload

    default:
      return state
  }
}
