import {INCREMENT } from "../action" ; 

const defaultState = 2019 ; 

export const count = (state=defaultState , action)=>{

    switch(action.type){
        case INCREMENT:
        return state+=action.num;
        break;

        default:
        return state;
        break;

    }
}