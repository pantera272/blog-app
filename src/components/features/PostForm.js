import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";

const PostForm = ({action, actionText, ...props}) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e =>{
    e.preventDefault();
    action({title, author, publishedDate, shortDescription, content});
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
        <Button variant="primary" type="submit">{actionText}</Button>
      </Form>
      
    </Container>
  )
}

export default PostForm;