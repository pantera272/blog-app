import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllPost } from "../../redux/postsReducer";
import PostView from "../views/PostView";

const ShowAllPost = () => {

  const posts = useSelector(getAllPost);

  return (
    <Row>
    {posts.map(post => <PostView
        key={post.id}
        id={post.id} 
        title={post.title} 
        author={post.author} 
        publishedDate={post.publishedDate} 
        category={post.category}
        shortDescription={post.shortDescription}
        />)}
    </Row>
  )
}

export default ShowAllPost;