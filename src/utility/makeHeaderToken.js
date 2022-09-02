const makeHeaderToken = (user) => ({"access-token": user.token, "client": user.client, "uid": user.uid})
export default makeHeaderToken