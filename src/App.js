
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#042743";
      showAlert("Enabled Dark Mode", "success");
      document.title = 'TextUtils - DarkMode';
      setTimeout(() => {
        document.title = 'TextUtils';
      }, 2000)

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Enabled Light Mode", "success");
      document.title = 'TextUtils - LightMode';
      setTimeout(() => {
        document.title = 'TextUtils';
      }, 2000)

    }
  }
  return (
    <>
     
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
