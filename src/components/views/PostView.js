import { Card, Button, Col} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { dateToString } from "../../utils/dateToString";

const PostView = props => {

  return(
    <Col key={props.id} md={4} sm={6}>
      <Card style={{marginBottom: '25px'}}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text><b>Author:</b> {props.author}</Card.Text>
          <Card.Text><b>Published:</b> {dateToString(props.publishedDate)}</Card.Text>
          <Card.Text><b>Category:</b> {props.category}</Card.Text>
          <Card.Text>{props.shortDescription}</Card.Text> 
          <NavLink to={'/post/' + props.id}>
            <Button variant="primary">See more</Button>
          </NavLink>
        </Card.Body>    
      </Card>
    </Col>
  )
}

export default PostView


