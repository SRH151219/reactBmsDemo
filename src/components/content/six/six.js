import React, { Component, Fragment } from 'react';
import axios from 'axios'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeWeather, getBaidu } from '../../../store/weatherStore/actionCreator'

class Six extends Component {
    render() {
        // console.log(this.props)
        // let {weather} = this.props.weatherReducer
        let { weather,baidu } = this.props
        return (
            <Fragment>
                <div>同步action,模块化,mapStateToProps,mapDispatchToProps,connect,bindActionCreators</div>
                <hr/>
                <div>天气:{weather}</div>
                <div>
                    <button onClick={this.handleChangeWeather.bind(this)}>改变天气</button>
                </div>
                <div>{baidu}</div>
                <div>
                    <button onClick={this.handleGetBaiDu.bind(this)}>获取数据</button>
                </div>

            </Fragment>
        )
    }
    handleChangeWeather() {
        // 方法1:
        this.props.changeWeatherData('cold')
        // 方法2:
        // this.props.changeWeather('cold');
    }
    handleGetBaiDu() {
        this.props.getData()
    }
    componentDidMount() {
    }
}


const mapStateToProps = (state, ownProps) => {
    // 参数1:redux的store数据,,注意模块划分场景
    // 参2:ownProps 是当前组件自己的props
    return {
        // 获取state中的部分值
        weather: state.weatherReducer.weather,
        baidu:state.weatherReducer.baidu
        // 可直接通过this.props.weather直接使用
    }

    // 获取state所有数据
    // return state
}

// 方法1:
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeWeatherData: (params) => {
            dispatch(changeWeather(params))
        },
        getData: () => {
            axios.get("/dev")
                .then((data) => {
                    console.log(data)
                    dispatch(getBaidu(data.config.url))
                })
                .catch((err) => {
                })
        }
    }
}

// 方法2:
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return bindActionCreators({
//         changeWeather,
//         getBaidu
//     },dispatch)
// }


// export default Six
// export default connect((state)=>state,(dispatch) => {
//     return bindActionCreators(weatherActionCreater, dispatch)
// })(Six)

export default connect(mapStateToProps, mapDispatchToProps)(Six)