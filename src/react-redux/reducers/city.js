


export const city = (state="美丽的大武汉", action)=>{

    switch(action.type){
        case "changeCity" :
        return action.city ; 
        break ; 

        default :
        return state ; 
        break ; 

    }

}