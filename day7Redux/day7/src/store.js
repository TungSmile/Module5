import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
const x=0;
const recuder = (init = x,action) => {
  switch (action.type){
      case "increment":
          return init+action.payload;
      case "decrement":
          return init-action.payload;
      default:
          return init;
  }
};
const store=createStore(recuder);
export default store;