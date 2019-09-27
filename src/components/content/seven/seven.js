import React,{Component,Fragment} from 'react'

import {changeMessage} from '../../../store/sevenStore/sevenActionCreator'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Seven extends Component{
    render(){
        let {message} = this.props
        return(
            <Fragment>
                <div>redux-thunk</div>
                <hr/>
                <div>{message}</div>
                <div>
                    <button onClick={this.handleModify.bind(this)}>修改值</button>
                </div>
            </Fragment>
        )
    }
    handleModify(){
        this.props.changeMessage('zzzzz')
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        message:state.sevenReducer.message
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return bindActionCreators({
        changeMessage:changeMessage
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Seven);