import React, { useState } from 'react';
import '../css/NevBar.css';
export default function NevBar(props) {
  const [mode, setMode] = useState(0);
  const [home, setHome] = useState("");
  const [how, sethow] = useState("");
  const [aboutus, setaboutus] = useState("");
  const [contect, setcontect] = useState("");

  function changeMode() {
    if (mode % 2 === 0) {
      props.setColor("white");
      props.setBgColor("#333333");
      console.log("mode1");
    } else {
      props.setColor("black");
      props.setBgColor("white");
      console.log("Mode2");
    }
    setMode(mode + 1);
  }

  function changehomeState() {
    setHome("underline");
    sethow("");
    setcontect("");
    setaboutus("");
  }

  
  function changehowState() {
    setHome("");
    sethow("underline");
    setcontect("");
    setaboutus("");
  }
  
  function changecontectState() {
    setHome("");
    sethow("");
    setcontect("underline");
    setaboutus("");
  }
  function changeaboutus () {
    setHome("");
    sethow("");
    setcontect("");
    setaboutus("underline");
  }
  return (
    <div style={{ color: props.color, background: props.bgColor }}>
      <div style={{ marginLeft: "50px", marginTop: "2%", color: props.color, background: props.bgColor }}>
        <div style={{ display: "flex", gap: "50px", fontFamily: "poppins", fontWeight: '500', paddingBottom: "20px", fontSize: "15px" }}>
         <a href='#'><div className='headerheading' onClick={changehomeState} style={{ textDecoration: `${home}`}}>Home</div></a> 
         <a href='#aboutus'> <div className='headerheading'  onClick={changeaboutus} style={{ textDecoration: `${aboutus}`}} >About Us</div></a>
         <a href='#how'><div className='headerheading' onClick={changehowState} style={{ textDecoration: `${how}` }}>How?</div></a> 
          <a href='#contect'><div className='headerheading' onClick={changecontectState} style={{ textDecoration: `${contect}` }}>Contact Us</div></a>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={changeMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Mode</label>
          </div>
          <button type="button" className="btn btn-primary" style={{ color: props.color, background: props.bgColor, position: "absolute", right: "8%", top: "20px" }}>Download</button>
        </div>
      </div>
    </div>
  );
}
