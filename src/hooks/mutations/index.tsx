import { Alert, Snackbar } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createPost, deletePost, editPost } from "../../services/api";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation(createPost, {
    onSettled() {
      queryClient.invalidateQueries(["posts"]);
    },
  });
};

export const useEditPost = () => {
  const queryClient = useQueryClient();

  return useMutation(editPost, {
    onSettled() {
      queryClient.invalidateQueries(["posts"]);
    },
  });
};
export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation(deletePost, {
    onSettled() {
      queryClient.invalidateQueries(["posts"]);
    },
  });
};
