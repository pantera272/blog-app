import { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import { Navigate, NavLink, useParams } from "react-router-dom";
import { deletePost, getPostById } from "../../redux/postsReducer";

const ShowPostById = () => {
  const {id} = useParams();
  const post = useSelector(state => getPostById(state, id));
  
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => {
    setModalVisible(false);
  }

  const handleShow = () => {
    setModalVisible(true);
  }

  const handleConfirmDelete = () => {
    dispatch(deletePost(id));
  }

  if(!post){
    return (
      <Navigate to='/'/>
    )
  } else {
    return(
      <>
      <Modal show={modalVisible} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Delete this post!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleConfirmDelete}>
              Remove
            </Button>
          </Modal.Footer>
        </Modal>

        <Container style={{width: "500px"}}>
          <Row>
            <Col><h3>{post.title}</h3></Col>
            <Col style={{textAlign : "end"}}>
              <NavLink to={'/post/edit/' + post.id}><Button variant="outline-primary">Edit</Button></NavLink>
              <Button variant="outline-danger" style={{marginLeft : "20px"}} onClick={handleShow}>Delete</Button>
            </Col>
          </Row>
          <Row>
            <Col><b>Author:</b> {post.author}</Col>
          </Row>
          <Row>
            <Col><b>Published:</b> {post.publishedDate}</Col>
          </Row>
          <Row style={{marginTop: "20px"}}>
            <Col>{post.content}</Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default ShowPostById;