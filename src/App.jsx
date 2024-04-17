import { Route } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <Route path='/' Component={<Home />} />
    </div>
  )
}

export default App