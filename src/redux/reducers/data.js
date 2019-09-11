// import {GETMVASYNC } from "../actions";
import { CHANGEWORD} from "../actions";

const defaultState = {
    word:"教师节快乐!!!",
    // mv:[]
}

export const data = (state=defaultState,action)=>{
    switch(action.type){
 
        case CHANGEWORD:
        return {...state,word:action.word};  // 返回新的数据 
        break;        
        
        default:
        return state;
        break;
    }
}