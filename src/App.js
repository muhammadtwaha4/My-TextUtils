import { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

function App() {

  const [mode,setMode] = useState('light')

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
    }else{
      setMode('light')
    }
  }


  return (
    <Router>
      <div style={{backgroundColor: mode === "light" ? "#b9e9f1" : "#003841",
        color: mode === "light" ? "black" : "white"
      }}>
      <Navbar toggleMode={toggleMode} mode={mode}/>

        <Routes>
        <Route path="/home" element={<TextArea mode={mode} />} />
        <Route path="/about" element={<AboutUs mode={mode} />} />
        </Routes>
        </div>

    </Router>
  );
}

export default App;
