

import DemoView from "./components/demo";

import store from "./store";
console.log(store);

// const state = store.getState();

export default class ReduxDemo extends Component{
    render(){
        const state = store.getState();
        return (
            <div>
                <h2> redux - 学习  -1906</h2>
                <hr/>
                <DemoView
                state={state}
                {...store.getState()}
                ></DemoView>
            </div>
        )
    }
}

import ReactDOM, {render} from "react-dom";

const hotRender = ()=>{
    render(
        <ReduxDemo></ReduxDemo>,
        document.getElementById('root')
    )
}

hotRender();

store.subscribe(hotRender)