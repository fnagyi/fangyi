


export const count = (state = 2000, action)=>{
    console.log(action);

    switch(action.type){
        case "countAdd":3
        return state+=action.num;
        break;

        case "countDesc":
        return state-=action.num;
        break;
        
        default:
        return state;
        break;
    }
}