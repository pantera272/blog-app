import { Routes, Route } from 'react-router-dom';
import Home from './components/views/Home';
import About from './components/views/About';
import Post from './components/views/Post';
import PostAdd from './components/views/PostAdd';
import PostEdit from './components/views/PostEdit';
import NotFoundPage from './components/views/NotFoundPage';

function App() {
  return (
    <main>
      <div>
        <p>hello</p>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App;
