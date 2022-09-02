import { Alert, Button, Snackbar } from "@mui/material";
import { Link } from "react-router-dom";
import { useDeletePost } from "../../hooks/mutations";

const PostCard = ({
  title,
  body,
  id,
}: {
  title: string;
  body: string;
  id: number;
}) => {
  const deletePost = useDeletePost();

  return (
    <div className="border rounded  border-gray-500 p-2 flex flex-col gap-2">
      <Snackbar open={deletePost.isSuccess} autoHideDuration={3000}>
        <Alert severity="success" sx={{ width: "100%" }}>
          post was deleted successfully
        </Alert>
      </Snackbar>
      <h1 className="capitalize font-bold border-b py-2 border-gray-400 ">
        {title}
      </h1>
      <h2>{body}</h2>
      <div className="flex items-center gap-5">
        <Link to={`/edit/${id}`}>
          <Button color="secondary" variant="contained">
            edit
          </Button>
        </Link>
        <Button
          color="error"
          variant="contained"
          onClick={() => deletePost.mutate({ id })}
        >
          {deletePost.isLoading ? "loading...." : "delete"}
        </Button>
      </div>
    </div>
  );
};

export default PostCard;
