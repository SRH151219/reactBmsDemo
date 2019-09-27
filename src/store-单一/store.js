
//createStore为一个方法，是redux自带的
import {createStore} from 'redux'

// 引入reducer
import reducer from './reducer'

// store 与 reducer 相关联-------reducers会返回新的state给store
//创建store,必须有一个参数reducers（是一个函数，这个函数会返回一个state值，即在store中存储公共状态state）
const store = createStore(reducer)

// 导出
export default store
