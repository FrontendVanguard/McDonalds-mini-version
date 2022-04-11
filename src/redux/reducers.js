import { ADD_ITEM, DELETE_ITEM } from './actions'
import 'react-native-get-random-values'
import { nanoid } from 'nanoid'
const initialState = {
  items: [],
}

function itemReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, {...action.payload, id: nanoid()}],
      }
    case DELETE_ITEM:
      
      return {
        ...state,
        items: state.items.filter(({ id }) => id != action.payload)
      }
    default:
      return state
  }
}

export default itemReducer