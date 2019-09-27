import React,{Component,Fragment} from 'react'
import {withRouter} from 'react-router-dom'

import './leftNav.scss'

class LeftNav extends Component{
    constructor(props){
        super(props);
        this.state = {
            nav:[
                {name:'商品',path:'/home/goods'},
                {name:'购物车',path:'/home/car'},
                {name:'我的',path:'/home/my'},
                {name:'四',path:'/home/four'},
                {name:'五',path:'/home/five'},
                {name:'六',path:'/home/six'},
                {name:'七',path:'/home/seven'},
                {name:'八',path:'/home/eight'}
            ]
        }
    }
    render(){
        let {nav} = this.state
        return(
            <Fragment>
                <ul>
                    {
                        nav.map((item,index)=>{
                            return(
                                <li key={index} onClick={this.handleGo.bind(this,item.path)}>{item.name}</li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleGo(param){
        // 路由跳转
        this.props.history.push(param)
    }
}

export default withRouter(LeftNav) 
