import "./index.scss";

import {MySwiper} from "~/components/swipe";
const SwiperItem = MySwiper.Item ; 

export default class Guide extends Component{
    constructor(){
        super()
        this.state = {
            imgs:[
                require("@/assets/img1.jpg"),
                require("@/assets/img2.jpg"),
                require("@/assets/img3.jpg"),
                require("@/assets/img4.jpg")
            ]
        }
    }

    componentDidMount(){
        if(localStorage.visitCount){
            localStorage.visitCount++;
            if(localStorage.visitCount>3){
                this.props.history.push("/index/home");
            }
        }else{
            localStorage.visitCount = 1;
        }
    }

    gotoApp=(id)=>{
        if(id==this.state.imgs.length-1){
            const {history} = this.props;
            history.push("/index/home");
        }
    }

    render(){
        const {
            imgs 
        } = this.state;
        return (
            <div className="guide">
                <MySwiper
                    id="my-guide"
                    swiperOptions={{loop:false,speed:1800}}
                >
                    {
                        imgs.map((m,i)=>{
                          return (
                            <SwiperItem key={i}>
                                <img 
                                onClick={()=>this.gotoApp(i)}
                                src={m} 
                                className="g-img" alt=""/>
                                {i==imgs.length-1&&<button onClick={()=>this.props.history.push('/index/home')} className='entry-btn'>点击进入</button>}
                            </SwiperItem>   
                          )
                        })
                    }
                </MySwiper>

            </div>
        )
    }
}