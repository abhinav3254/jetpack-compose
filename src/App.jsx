import './App.css';
import Home from './components/Pages/Home/Home';
import Header from './components/header/Header';
import About from './components/Pages/About/About';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        {/* Header is outside of the Routes, as it's not a route itself */}
        <Header />

        {/* Routes should only contain Route components */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
export default App;
