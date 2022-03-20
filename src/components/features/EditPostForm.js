import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { editPost, getPostById } from "../../redux/postsReducer";
import PostForm from "./PostForm";

const EditPostForm = () => {
  const { id } = useParams();
  const post = useSelector(state => getPostById(state, id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = postEdited => {
    dispatch(editPost({...postEdited, id}));
    navigate("/");
  }
  if (!post) return <Navigate to="/" />
  return (
    <PostForm action={handleSubmit} actionText="Edit" title={post.title} author={post.author} publishedDate={post.publishedDate} content={post.content} shortDescription={post.shortDescription}/>
  )
}


export default EditPostForm;