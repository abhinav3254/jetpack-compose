import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';


const App = () => {
  return (
    <div>
      <Nav />
      <div className='mt-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/post' element={<Posts />} />
          <Route path='/post/:id' element={<PostDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App