
import {Button} from "antd-mobile"

export default class ReactReduxDemo extends Component{
    render(){
        console.log(this.props) ; 
        const {
            city , 
            count ,
            num , 
            city1 ,
            add , 
            desc,
            changeCity 
        } = this.props ; 
        return(
            <div>
                <h2> ReactReduxDemo -- 计数器 </h2>
                <h2> 父组件  容器组件  负责业务逻辑和数据管理 </h2>
                <h2> 子组件  UI组件  负责 UI 的展示 </h2>
                <hr/>
                <h2> count   == {count }  /  {num }</h2>
                <h2> city    == {city }  /  {city1 }</h2>
                <hr/>
                <Button type="primary" inline onClick={()=>add(10)}>add+10</Button>
                <Button type="primary" inline onClick={()=>desc(10)}>desc-10</Button>
                <Button type="primary" inline onClick={()=>changeCity("我喜欢武汉")}>changeCity</Button>
                
            </div>
        )
    }
}