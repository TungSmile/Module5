import {createStore} from "redux";

const reducer =(initialState,action)=>{
    // reducer có 2 tham số
    if (action.type=="click"){
        // type trong action như 1 định danh để xác định các action với nhau
        return action.payload;
    }
    return{
        name:'a'
    }
};
 const store =createStore(reducer);
export default store;
