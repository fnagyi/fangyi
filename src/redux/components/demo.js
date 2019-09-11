
import store from "../store" ; 
import {Button} from "antd-mobile" ; 

import {changeCity , increment ,changeWordAsync} from "../action" ;

export default class DemoView extends Component{

    render(){
        console.log(this.props) ; 
        const {
            state , 
            count , 
            city ,
            // data:{
            //     word 
            // }
        } = this.props; 
        
        const myState = store.getState() ; 

        return (
            <div>
                <h2> DemoView -- redux 计数器  </h2>
                <hr/>
                <h2> count === {state.count} / {count}  / {myState.count*1  + 1000 }</h2>
                <h2> city ==  {city}  </h2>
                <hr/>
                <Button onClick = {()=>store.dispatch({type:"COUNTADD"})}  type="primary" inline > count add </Button>
                <Button onClick = {()=>store.dispatch(changeCity("我想去马尼拉。。。。"))}  type="primary" inline > 我想去马尼拉</Button>
                <Button onClick={()=>store.dispatch(increment(40))} type="warning" inline> increment 10 </Button>
                <Button onClick={()=>store.dispatch(changeWordAsync())} type="primary" inline> 修改 word async     </Button>
 
            </div>
        )
    }
}