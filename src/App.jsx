import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Nav from './components/Nav';
import NotFound404 from './components/NotFound404';
import OrderSummary from './components/OrderSummary';

const App = () => {
  return (
    <div>
      <Nav />
      <div className='mt-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/order-summary' element={<OrderSummary />} />
          <Route path='*' element={<NotFound404 />} />
        </Routes>
      </div>
    </div>
  )
}

export default App