
import {observable , action , computed , autorun} from "mobx" 

class Demo {
    @observable num = 2019 ;  // 可被观察对象  
    @observable msg = "Are you ok ?"    

    @action changeMsg = msg=>{
        this.num = num  
    }
}