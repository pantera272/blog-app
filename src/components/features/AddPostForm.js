import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postsReducer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e =>{
    e.preventDefault();
    dispatch(addPost({
      title: title,
      author: author,
      publishedDate: publishedDate,
      shortDescription: shortDescription,
      content: content}));  
      navigate("/", {replace: true});  
  }

  return (
    <Container style={{width: "500px"}}>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Title:</Form.Label>
        <Form.Control type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}></Form.Control>
        <Form.Label>Author:</Form.Label>
        <Form.Control type="text" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)}></Form.Control>
        <Form.Label>Pyblished:</Form.Label>
        <Form.Control type="text" placeholder="Date" value={publishedDate} onChange={e => setPublishDate(e.target.value)}></Form.Control>
        <Form.Label>Short desctiption:</Form.Label>
        <Form.Control as="textarea" placeholder="Description" rows={3} value={shortDescription} onChange={e => setShortDescription(e.target.value)}></Form.Control>
        <Form.Label>Main content:</Form.Label>
        <Form.Control as="textarea" placeholder="Content" rows={5} value={content} onChange={e => setContent(e.target.value)} style={{marginBottom: "20px"}}></Form.Control>
        <Button variant="primary" type="submit">AddPost</Button>
      </Form>
      
    </Container>
  )
}

export default AddPostForm;