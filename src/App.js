import './App.css';
import NevBar from './Components/NevBar';
import { useState } from 'react';
import Home from './Components/Home';
function App() {
  const [color, setColor] = useState("black");
  const [bgcolor, setBgColor] = useState("white");

  return (
    <div style={{ color: color, backgroundColor: bgcolor ,width:"100%",height:"100%",border:"solid",borderColor:bgcolor}}>
      <NevBar  setColor={setColor} setBgColor={setBgColor} color={color} bgcolor={bgcolor}/>
      <Home></Home>
    </div>
  );
}

export default App;
