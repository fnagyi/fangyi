import { CHANGECITY } from "../action";

const defaultState = "big 大武汉...";

export const city = (state=defaultState , action)=>{

    switch(action.type){
        case CHANGECITY :
        return action.city ; 
        break ; 

        default :
        return state ; 
        break ; 

    }

}