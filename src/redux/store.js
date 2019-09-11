
import {createStore} from "redux" ; 

import {reducers} from "./reducers" ; 

// 整个应用智能有一个Store 
const store = createStore(reducers);
// const state = store.getState() ;  // 对store 快照 得到新的state

export default store  ; 