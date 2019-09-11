
import {NavBar,Icon,Popover,ActionSheet} from "antd-mobile"
// const Item = Popover.Item;

import {history} from "&/history";

export default class Head extends Component{
    goback=(show)=>{
        if(show){
            history.go(-1);
        }
    }

    render(){
        const {
            show,
            search,
            login,
            scan
        }  = this.props;
        return (
            <NavBar
            mode="dark"
            icon={show&&<Icon type="left" />}
            onLeftClick={ ()=>this.goback(show) }
            // rightContent={[
            //  !search&&<Icon key="0" onClick={this.gotoSearch} type="search" style={{ marginRight: '16px' }} />,
            //  <Pop key={1} login={login} scan={scan}/>     ,
            // ]}
          > {this.props.title }</NavBar>
        )
    }
}