import { useQuery } from "@tanstack/react-query"
import { getPost, getPosts } from "../../services/api"

export const useGetPosts = () => {
    return useQuery(['posts'],getPosts)
}
export const useGetPost = (data:{}) => {
    return useQuery(['post',data],()=>getPost(data))
}

