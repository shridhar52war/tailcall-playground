const makeToken = ({ username, password }) =>
  Buffer.from(`${username}:${password}`).toString("base64");

export default makeToken;
