import axios from 'axios'

export const changeWeather = (params)=>{
  let action = {
    type: 'CHANGE_WEATHER',
    params: params
  }
  return action;
}


export const getBaidu = (params)=>{
  console.log(params)
  let action = {
    type :"GET_DATA",
    params:params
  }
  return action
}

// export default {
//   changeWeather(params) {
//     let action = {
//       type: 'CHANGE_WEATHER',
//       params: params
//     }
//     return action;
//     // Store.dispatch(action)
//   }
// }