import { useMutation } from "@tanstack/react-query";
import { createPost, deletePost, editPost } from "../../services/api";

export const useCreatePost = () => {

  return useMutation(createPost);
};

export const useEditPost = () => {

  return useMutation(editPost);
};
export const useDeletePost = () => {

  return useMutation(deletePost);
};
