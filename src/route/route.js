import React,{Component} from 'react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
// 封装的异步组件
import Loadable from '../common/utils/loadable'


import Home from '../components/home/home';
import Goods from '../components/content/goods/goods';
import Car from '../components/content/car/car';
import My from '../components/content/my/my';
import Four from '../components/content/four/four';
import Five from '../components/content/five/five';
import Six from '../components/content/six/six';
import Seven from '../components/content/seven/seven';
import Eight from '../components/content/eight/eight';

// const Home = Loadable(()=>import('../components/home/home'))
// const Goods = Loadable(()=>import('../components/content/goods/goods'))
// const Car = Loadable(()=>import('../components/content/car/car'))
// const My = Loadable(()=>import('../components/content/my/my'))
// const Four = Loadable(()=>import('../components/content/four/four'))
// const Five = Loadable(()=>import('../components/content/five/five'))
// const Six = Loadable(()=>import('../components/content/six/six'))
// const Seven = Loadable(()=> import('../components/content/seven/seven'))


class GlobalRouter extends Component{
    render(){
      return(
          <BrowserRouter>
             {/* <Modal></Modal> */}
            <Switch>
              <Route path='/home' render = {()=>{
                  return(
                    <Home>
                      <Route path='/home/goods' component={Goods}></Route>
                      <Route path='/home/car' component={Car}></Route>
                      <Route path='/home/my' component={My}></Route>
                      <Route path='/home/four' component={Four}></Route>
                      <Route path='/home/five' component={Five}></Route>
                      <Route path='/home/six' component={Six}></Route>
                      <Route path='/home/seven' component={Seven}></Route>
                      <Route path='/home/eight' component={Eight}></Route>
                    </Home>
                  )
              }}></Route>
              <Redirect path='/' exact to='/home/goods' component={Goods}></Redirect>
            </Switch>
          </BrowserRouter>
      )
    }
  }
  export default GlobalRouter