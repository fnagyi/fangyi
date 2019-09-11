
import {HashRouter as Hash , Route} from "react-router-dom" ; 
import React ,{Component} from "React" ;
import {Layout} from "./views" ;

export class MainRoute extends Component{
    render(){
        return (
            <Hash basename="/">
                <Route component={Layout}></Route>
            </Hash>
        )
    }
}