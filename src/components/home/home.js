import React, { Component, Fragment } from 'react'
import './home.scss'
// import './amaite.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionCreator from '../../store/actionCreator'


// import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Header from '../header/header';
import LeftNav from '../leftNav/leftNav'

class Home extends Component {

    render() {
        return (
            <Fragment>
                <div className="home">
                    <div className="header">
                        <Header></Header>
                    </div>
                    <div className="main">
                        <div className="leftNav">
                            <LeftNav >

                            </LeftNav>
                        </div>
                        {/* <ReactCSSTransitionGroup
                            transitionName="fade"
                            // component="div"
                            // className={style.transitionWrapper}
                            transitionEnterTimeout={5000}
                            transitionLeaveTimeout={5000}> */}
                        <div className="content">
                            {/* 动态显示嵌套路由 */}
                            {this.props.children}
                        </div>
                        {/* </ReactCSSTransitionGroup> */}

                    </div>
                    <div className="footer">
                    </div>
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        // actionCreator.changeLoadingStatus('0')
        // console.log(this.props)
        // this.props.changeLoadingStatus(false)
    }
}

// export default Home;
export default connect((state) => state, (dispatch) => {
    return bindActionCreators(ActionCreator, dispatch)
})(Home)
