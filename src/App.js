import React,{Component,Fragment} from 'react';
// import logo from './logo.svg';
import './App.css'


import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ActionCreator from './store/actionCreator'

// import Store from './store/store'

// import Home from './components/home/home'
// import Loading from './components/loading/loading'
import GlobalRouter from './route/route'
class App extends Component{
  constructor(){
    super();
    this.state={
      status:true
    }
  }
  render(){
    let {loadingStatus} = this.props;
    return(
      <Fragment>
          {/* <div className="app">
            <Home></Home>
          {loadingStatus  ? <Loading></Loading> : ''}
          </div> */}

          <GlobalRouter></GlobalRouter>
      </Fragment>
    )
  }
  componentDidMount () {
    // Store.subscribe(() => {
    //   this.setState({})
    // })
  }

}

// export default App;

export default connect((state)=>state,(dispatch)=>{
  return bindActionCreators(ActionCreator,dispatch)
})(App)