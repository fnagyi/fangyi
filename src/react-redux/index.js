
import ReactDOM, {render} from "react-dom";
// import ReactReduxDemo from "./components"; 
import Container from "./components/demoCon"   // 容器 1 
import store from "./store"  ; 
// 父组件   

import {Provider} from "react-redux" ; 
export default class ReactRedux extends Component{
    render(){
        return(
            <div>
                <h2>react-redux  / redux 升级</h2>
                <hr/>
                <Container/>
            </div>
        )
    }
}

const hotRender = ()=>{
    render(
        <Provider store={store}>
            <ReactRedux/>
        </Provider> , 
        document.getElementById("root")
    )
}

hotRender(); 