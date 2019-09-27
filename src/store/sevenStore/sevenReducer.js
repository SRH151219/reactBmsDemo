// 初始化数据
let State = {
    message: 'mess'
}

export default (preState = State, actions) => {
    let {
        type,
        params
    } = actions
    let newState = Object.assign({}, preState);
    switch (type) {
        case 'GET_START':
            newState.message = params;
            console.log(newState.message)
            return newState;
        case 'GET_DONE':
            newState.message = params;
            console.log(newState.message)

            return newState;
        case 'GET_END':
            newState.message = params;
            console.log(newState.message)

            return newState;
        default:
            return newState
    }

}
