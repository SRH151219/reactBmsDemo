import State from './state'
export default (preState = State, actions) => {
    // 修改数据
    let {
        type,
        params
    } = actions
    //不能在此直接修改state中的值，要通过深拷贝，先获取到数据，然后进行修改，再return出去-----store中会接收return的值（组件中可通过Store.getState()获取最新的值）
    const newState = JSON.parse(JSON.stringify(preState));
    switch (type) {
        case 'CHANGE_LOADING_STATUS':
            newState.loadingStatus = params;
            // console.log(newState)
            return newState;
        //必须写，当所有的值都不匹配时，则会直接return preState(在state中会设置初始值，当所有值都不匹配时，直接返回preState)
        default:
            return preState;
    }
}