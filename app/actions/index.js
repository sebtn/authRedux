export let auth = (isLoggedIn) => {
  return {
    type: "CHANGE_AUTH",
    payload: isLoggedIn
  }
}