import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div>

        <Routes>
        <Route path="/home" element={<TextArea />} />
        <Route path="/about" element={<AboutUs />} />
        </Routes>
        </div>

    </Router>
  );
}

export default App;
