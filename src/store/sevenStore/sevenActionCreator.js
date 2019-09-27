import axios from 'axios';

// export const changeMessage = (params)=>{
//     const actions = {
//         type:'GET_MESSAGE',
//         params:params
//     }
//     return actions;
// }

// 定义action  方式可以有很多种,视情况而定
const actions = (params) => ({
    actionStart: {
        type: 'GET_START',
        params: params
    },
    actionDone: {
        type: 'GET_DONE',
        params: params
    },
    actionEnd: {
        type: 'GET_END',
        params: params
    }
})

// 注意:使用redux-thunk 是函数返回函数的形式
export const changeMessage = () => async (dispatch) => {
    dispatch(actions('加载前').actionStart)
    // 异步操作
    await axios.get('/dev')
        .then((data) => {
            // 处理数据
            // dispatch(actions(data.config.url).actionDone)
            dispatch(actions('正在加载数据').actionDone)

        })
        .catch((err) => {
            console.log(err)
        })
    dispatch(actions('加载结束').actionEnd)
}

// export const changeMessage = () => (dispatch) => {
//     dispatch(actions('加载前').actionStart)
//     // 异步操作
//     axios.get('/dev')
//         .then((data) => {
//             // 处理数据
//             // dispatch(actions(data.config.url).actionDone)
//             dispatch(actions('正在加载数据').actionDone)

//         })
//         .catch((err) => {

//         })
//     dispatch(actions('加载结束').actionEnd)
// }