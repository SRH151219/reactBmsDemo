// import Store from './store'
export default{
  changeLoadingStatus(params){
    let action = {
      type:'CHANGE_LOADING_STATUS',
      params:params
    }
    return action;
    // Store.dispatch(action)
  }
}