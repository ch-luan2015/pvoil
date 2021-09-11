import { combineReducers } from "redux";
import userReducer from "./Authorization";
import  InforReducer  from "./Information";


const rootReducer = combineReducers({
  user: userReducer,
  infor: InforReducer
});

export default rootReducer;
