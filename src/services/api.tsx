import axios from "axios";
const BaseUrl = "https://jsonplaceholder.typicode.com/posts/";
export const getPosts = async () => {
  const response = await axios.get(BaseUrl);
  return response;
};
export const getPost = async (data:any) => {
  const response = await axios.get(`${BaseUrl}${data.id}`);
  return response;
};
export const createPost = async (data:any) => {
  const response = await axios.post(BaseUrl,data);
  return response;
};
export const editPost = async (data:any) => {
  const response = await axios.patch(`${BaseUrl}${data.id}`,data.data);
  return response;
};
export const deletePost = async (data:any) => {
  const response = await axios.delete(`${BaseUrl}${data.id}`);
  return response;
};
