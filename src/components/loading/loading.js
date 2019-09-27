import React,{Component,Fragment} from 'react'
import './loading.scss'

class Loading extends Component{
    render(){
        return(
            <Fragment>
                <div className="loading">
                    <div className="wrap">
                        <div className="k-line2 k-line12-1"></div>
                        <div className="k-line2 k-line12-2"></div>
                        <div className="k-line2 k-line12-3"></div>
                        <div className="k-line2 k-line12-4"></div>
                        <div className="k-line2 k-line12-5"></div>
                        <div className="k-line2 k-line12-6"></div>
                        <div className="k-line2 k-line12-7"></div>
                        <div className="k-line2 k-line12-8"></div>
                        <p>Loading</p>
                    </div>
                </div>
            </Fragment>
        )
    }

    componentWillUnmount(){
        console.log('loading消失')
    }
}

export default Loading