export default (state=false, action) => {
  switch (action.type){
    case "CHANGE_AUTH":
    return action.payload
  }
  return state
}