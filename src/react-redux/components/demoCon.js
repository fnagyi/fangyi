
import {connect} from "react-redux"; 
import ReactReduxDemo from "./index" ;
import {countAdd , countDesc ,changeCity} from "../actions" ;

const mapStateToProps  = (state)=>{   // store.getState()
    console.log(state);
    return {
        ...state,
        num:state.count+888,
        city1:state.city + "-千锋教育"
    }
}


// （2）输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。子改父 
//容器 修改数据的方法 (dispatch) 当做props 传递给UI 组件  UI组件负责执行触发 
// 输出逻辑 不写  自动注入 dispatch ==>   store.dispatch
const mapDispatchToProps = (dispatch)=>{  // store.dispatch
    return {
        add:n=>dispatch(countAdd(n)),
        desc:n=>dispatch(countDesc(n)),
        changeCity:city=>dispatch(changeCity(city))
    }
}






export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReactReduxDemo);     // 容器组件 