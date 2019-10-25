export default{
  changeTokenModal(params){
    let action ={
      type:'CHANGE_TOKEN_MODAL',
      params:params
    }
    return action
  },
  changeTokenModalAsync(){
    return (dispatch)=>{
      let action={type:'CHANGE_TOKEN_MODAL'}
      setTimeout(()=>{
        let showModal =false
        action.params=showModal
        dispatch(action)
      },1000)
    }
  }
}