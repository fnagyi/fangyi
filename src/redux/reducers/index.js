


// 合并写法 
import {combineReducers } from "redux";
import { city } from "./city"; 
import { count } from "./count"; 
import {data} from "./data"

export const reducers = combineReducers({
    count , 
    city ,
    data
})