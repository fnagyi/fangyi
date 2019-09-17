
import "./index.scss";
import Head from "../../components/Head";
import {history} from "&/history"
import {axios} from "&/axios";

export default class Mine extends Component{

    componentDidMount(){
        axios.get("/vue/movie",{params:{limit:6}}).then(res=>{
            console.log(res.data.result)
            // this.setState({
            //     banner:res.data.result
            // })
        })
    }

    render(){
        return (
            <div>
                <Head title="个人中心"></Head>
                <h2> wo shi Mine  </h2>
            </div>
        )
    }
}