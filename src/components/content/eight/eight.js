import React,{Component,Fragment} from 'react'

import {changeMessage} from '../../../store/eightStore/eightActionCreator'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Eight extends Component{
    render(){
        let {message} = this.props
        return(
            <Fragment>
                <div>redux-actions</div>
                <hr/>
                <div>{message}</div>
                <div>
                    <button onClick={this.handleModify.bind(this)}>修改值</button>
                </div>
            </Fragment>
        )
    }
    handleModify(){
        this.props.changeMessage()
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        message:state.eightReducer.message
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return bindActionCreators({
        changeMessage:changeMessage
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Eight);