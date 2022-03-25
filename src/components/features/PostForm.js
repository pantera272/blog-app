import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../redux/categoriesReducer";


const PostForm = ({action, actionText, ...props}) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(!props.publishedDate ? new Date() : new Date(props.publishedDate));
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [category, setCategory] = useState(props.category || 'default');

  const [contentError, setContentError] = useState(false);
  const [publishedDateError, setPublishedDateError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const categories = useSelector(getAllCategories);

  const handleSubmit = () =>{
    if (!content || !publishedDate || category === "default" || !category){
      (!content) ? setContentError(true) : setContentError(false);
      (!publishedDate) ? setPublishedDateError(true) : setPublishedDateError(false);
      (category === "default" || !category) ? setCategoryError(true) : setCategoryError(false);
    } else {
      action({title, author, publishedDate, shortDescription, content, category});
    }
    
  }  
  

  return (
    <Container style={{width: "500px"}}>
      <Form onSubmit={validate(handleSubmit)}>
        
        <Form.Label>Title:</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Title" 
          {...register("title", { required: true, minLength: 3 })} 
          value={title} 
          onChange={e => setTitle(e.target.value)}>
        </Form.Control>
        {errors.title?.type === 'required' && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        {errors.title?.type === 'minLength' && <small className="d-block form-text text-danger mt-2">Min value is 3 characters</small>}
        
        <Form.Label>Author:</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Author" 
          {...register("author", { required: true, minLength: 3 })}
          value={author} 
          onChange={e => setAuthor(e.target.value)}>
        </Form.Control>
        {errors.author?.type === 'required' && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        {errors.author?.type === 'minLength' && <small className="d-block form-text text-danger mt-2">Min value is 3 characters</small>}

        <Form.Label>Pyblished:</Form.Label>
        <DatePicker selected={publishedDate} dateFormat="MM/dd/yyyy" onChange={(date) => setPublishedDate(date)} />
        {publishedDateError && <small className="d-block form-text text-danger mt-2">Pick a date</small>}

        <Form.Label>Category:</Form.Label>
        <Form.Select aria-label="Default select example" defaultValue={category} onChange={e => setCategory(e.target.value)}>
          <option value="default">Select categories...</option>
          {categories.map(category =>(<option key={category} value={category} >{category}</option>))};
        </Form.Select>
        {categoryError && <small className="d-block form-text text-danger mt-2">Please select category</small>}

        <Form.Label>Short desctiption:</Form.Label>
        <Form.Control as="textarea" 
          placeholder="Description" 
          rows={3} 
          {...register("shortDescription", { required: true, minLength: 20 })}
          value={shortDescription} 
          onChange={e => setShortDescription(e.target.value)}>           
        </Form.Control>
        {errors.shortDescription?.type === 'required' && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        {errors.shortDescription?.type === 'minLength' && <small className="d-block form-text text-danger mt-2">Min value is 20 characters</small>}

        
        <Form.Label>Main content:</Form.Label>
        <ReactQuill theme="snow" value={content} onChange={setContent}/>
        {contentError && <small className="d-block form-text text-danger mt-2">Write something</small>}
        <Button variant="primary" type="submit" style={{marginTop: "15px"}}>{actionText}</Button>
      </Form>
      
    </Container>
  )
}

export default PostForm;