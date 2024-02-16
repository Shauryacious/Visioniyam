import './App.css';
import NevBar from './Components/NevBar';
import { useState } from 'react';
import Home from './Components/Home';
import About from './Components/About';
function App() {
  const [color, setColor] = useState("black");
  const [bgcolor, setBgColor] = useState("white");

  return (
    <div style={{ color: color, backgroundColor: bgcolor, width: "100%", height: "100%", border: "solid", borderColor: bgcolor }}>
      <NevBar setColor={setColor} setBgColor={setBgColor} color={color} bgcolor={bgcolor} />
      <section id=''>
       <Home color={color} bgcolor={bgcolor}  />
       </section>
       <section id='aboutus'>
      <About color={color} bgcolor={bgcolor}  />
      </section>
    </div>
  );
}

export default App;
