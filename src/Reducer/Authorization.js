import { GET_USER_REQUEST, GET_USER_SUCCESS } from '../Actions/ActionType';

const initialUserState = {
    users:{},
};

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case GET_USER_REQUEST:
          return {
              ...state,
            };
        case GET_USER_SUCCESS:
            return {
              ...state,
              users: action.payload,
          }
      default: return state;
    }
};

export default userReducer;
