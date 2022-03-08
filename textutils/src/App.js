import React, { useState } from 'react'
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setmode] = useState(`light`);
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode("dark");
      document.body.style.backgroundColor = "#454748";
      showAlert("Dark mode has been enabled.", "success");
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has beed enabled.", "success");
    }

  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
