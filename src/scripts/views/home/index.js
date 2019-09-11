import "./index.scss";
import {Button,WhiteSpace,NoticeBar} from "antd-mobile";
import Head  from "~/components/Head"
export default class Home extends Component{

    render(){
        return (
            <div>
                <Head title="首页"></Head>
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                  wuhan1906 daydayup!!! 天道酬勤  努力周天写代码!!!! 加油...
                </NoticeBar>
                <Button disabled>default disabled</Button><WhiteSpace />
                <Button type="primary" disabled>primary disabled</Button><WhiteSpace />
                <Button type="warning">warning</Button><WhiteSpace />
            </div>
        )
    }
}