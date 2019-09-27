// import State from './state'

// 初始化数据
let State = {
    weather:'sun',
    baidu:'baidu'
}

export default (preState = State, actions) => {
    // 修改数据
    let {
        type,
        params
    } = actions
    // const newState = JSON.parse(JSON.stringify(preState));
    const newState = Object.assign({}, preState)
    switch (type) {
        case 'CHANGE_WEATHER':
            newState.weather = params;
            return newState;
        case 'GET_DATA':
            console.log(params)
            newState.baidu = params;
            return newState;
        default:
            return newState;
    }
}