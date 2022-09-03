import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useEditPost } from "../hooks/mutations";
import { useGetPost } from "../hooks/queries";

const Edit = () => {
  const editPost = useEditPost();
  const { id } = useParams();
  const post = useGetPost({ id });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();
  const onSubmit = (data: {}) => editPost.mutate({ data, id: id });
  if (post.isLoading) {
    return <h1>loading.....</h1>;
  }
  return (
      <div className=" mx-auto px-5">
              <Snackbar open={editPost.isSuccess} autoHideDuration={3000}>
        <Alert severity="success" sx={{ width: "100%" }}>
          post was edited successfully
        </Alert>
      </Snackbar>
      <form
        className=" max-w-[600px] w-full mx-auto   space-y-5"
        onSubmit={handleSubmit((data: any) => console.log(data))}
      >
        <h2 className="capitalize font-semibold">Edit post</h2>
        <TextField
          label="title"
          size="small"
          fullWidth
          defaultValue={post?.data?.data?.title}
          {...register("title", {
            required: "this field is required",
          })}
          error={!!errors?.title}
          // helperText={errors?.title && errors?.title?.message}
        />
        <TextField
          defaultValue={post?.data?.data?.body}
          label="post"
          multiline
          fullWidth
          minRows={5}
          maxRows={5}
          {...register("body", {
            required: "this field is required",
          })}
          error={!!errors?.body}
          // helperText={errors?.body && errors?.body?.message}
        />
        <div className="flex justify-end">
          <Button onClick={handleSubmit(onSubmit)} variant="contained">
            {editPost.isLoading ? "loading....." : "edit post"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
