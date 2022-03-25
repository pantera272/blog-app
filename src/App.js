import { Routes, Route } from 'react-router-dom';
import Home from './components/views/Home';
import About from './components/views/About';
import Post from './components/views/Post';
import PostAdd from './components/views/PostAdd';
import PostEdit from './components/views/PostEdit';
import NotFoundPage from './components/views/NotFoundPage';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import Categories from './components/views/Categories';
import CategoriesPost from './components/views/CategoriesPost';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<CategoriesPost />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
