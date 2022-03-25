import { useSelector } from "react-redux";
import { getPostByCategory } from "../../redux/postsReducer";
import { Row } from "react-bootstrap";
import PostView from "../views/PostView";

const ShowPostByCategory = props => {

  const categories = useSelector(state => getPostByCategory(state, props.category))

  if (categories.length === 0){
    return (
      <p>No posts in this category</p>
    )
  } else {
    return (
    <Row>
      {categories.map(category => <PostView
        key={category.id}
        id={category.id} 
        title={category.title} 
        author={category.author} 
        publishedDate={category.publishedDate} 
        category={category.category}
        shortDescription={category.shortDescription}
        />)}
    </Row>
  )
  }
  
}
export default ShowPostByCategory;