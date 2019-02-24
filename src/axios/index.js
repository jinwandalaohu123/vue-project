import instance from "./axios"
const PostIn = params => instance.post("/user_api/is_login",params)
export {
  PostIn
}
