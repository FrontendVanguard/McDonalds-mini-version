import { ADD_ITEM, DELETE_ITEM } from './actions'

const initialState = {
  items: [],
}

function itemReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      state.items.push(action.payload)
      return {
        ...state,
        items: state.items,
      }
    case DELETE_ITEM:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default itemReducer