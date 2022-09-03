import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { PostCard } from "../components";
import { useCreatePost } from "../hooks/mutations";
import { useGetPosts } from "../hooks/queries";
const Home = () => {
  const getPosts = useGetPosts();
  const createPost = useCreatePost();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: {}) => createPost.mutate({ ...data });

  return (
    <div>
      <Snackbar open={createPost.isSuccess} autoHideDuration={3000}>
        <Alert severity="success" sx={{ width: "100%" }}>
          post was created successfully
        </Alert>
      </Snackbar>
     
      <main className="mx-auto max-w-[800px]">
        <div className=" mx-auto px-5">
          <form
            className=" max-w-[600px] w-full mx-auto   space-y-5"
            onSubmit={handleSubmit((data: any) => console.log(data))}
          >
            <h2 className="capitalize font-semibold">create a new post</h2>
            <TextField
              label="title"
              size="small"
              fullWidth
              {...register("title", {
                required: "this field is required",
              })}
              error={!!errors?.title}
              // helperText={errors?.title && errors?.title?.message}
            />
            <TextField
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
                {createPost.isLoading ? "loading...." : " Create Post"}
              </Button>
            </div>
          </form>
        </div>
        <p className="uppercase text-lg font-bold mt-10 ">all post</p>
        <div className="grid grid-cols-2 mx-auto border w-full gap-5 mt-10">
          {getPosts.isLoading
            ? "loading...."
            : getPosts?.data?.data.map((item: any) => {
                return (
                  <PostCard body={item.body} id={item.id} title={item.title} key={item.id} />
                );
              })}
        </div>
      </main>
    </div>
  );
};

export default Home;
