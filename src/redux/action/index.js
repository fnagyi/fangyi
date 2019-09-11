
export const CHANGECITY = "changeCity" 
export function changeCity(city){
    return{
        type:CHANGECITY , 
        city 
    }
}

export const INCREMENT = "increment";

export function increment(num){
    return {
        type:INCREMENT,
        num
    }
}


export const CHANGEMSG = "CHANGEMSG";
export const changeMsg = msg=>(
    {
        type:CHANGEMSG,
        msg
    }
)



export const changeWordAsync = ()=>{
    return axios.get("/react/index").then(res=>{
        // 操作成功时候发 送  action  
        return {
            type:"changeWordAsync",
            word:res.data
        }
    })
}

// import {axios} from "../../utils/axios";


// export const GETMVASYNC = "getMvAsync";
// export function getMvAsync({url,params,cb}){
//     return axios.get(url,{params})
//     .then(res=>{
//         console.log(res)
//         cb();
//         return {
//             type:GETMVASYNC,
//             mv:res.data.result
//         }
//     })
// }



// export async function changeMvAsync({url,params}){
//     const res = await axios.get(url,params);
//     return {
//         type:"changeMvAsync",
//         mv:res.data.result
//     }
// }
