// import {GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS} from '../Actions/ActionType';

const initalStates = {
  list :[],
}

 const InforReducer = (state = initalStates , action) => {
  switch (action.type) {
    case "GET_PRODUCT_REQUEST":
    return {
      ...state
    }
    case "GET_PRODUCT_SUCCESS":
    return {
      ...state,
      list: action.payload
    }
    default: return state
  }
}

export default InforReducer
