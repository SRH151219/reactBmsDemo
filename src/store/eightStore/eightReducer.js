// // 初始化数据
// let State = {
//     message: 'mess'
// }

// export default (preState = State, actions) => {
//     let {
//         type,
//         params
//     } = actions
//     let newState = Object.assign({}, preState);
//     switch (type) {
//         case 'EIGHT_START':
//             newState.message = params;
//             console.log(newState.message)
//             return newState;
//         case 'EIGHT_DONE':
//             newState.message = params;
//             console.log(newState.message)

//             return newState;
//         case 'EIGHT_END':
//             newState.message = params;
//             console.log(newState.message)

//             return newState;
//         default:
//             return newState
//     }

// }

import {
    handleActions,
    handleAction
} from 'redux-actions';

let defaultStatus = {
    message: 'mess'
}

// 方式1:只处理一种type-----handleAction
// const eightReducer = handleAction(
//     'EIGHT_DONE',
//     (state,action)=>({
//         message:action.params
//     }),
//     defaultStatus,
// )

// 方式2:处理多种type-----handleActions
const eightReducer = handleActions({
        EIGHT_START: (state, action) => {
            console.log(action.params)
            return {
                message: action.params
            }
        },
        EIGHT_DONE: (state, action) => {
            console.log(action.params)
            return {
                message: action.params
            }
        },
        EIGHT_END: (state, action) => {
            console.log(action.params)
            return {
                message: action.params
            }
        }
    },
    defaultStatus)


export default eightReducer