import React from 'react'
import { useState } from 'react';
import '../css/NevBar.css';
export default function NevBar(props) {
    const[mode,setmode]=useState(0);
    function changemode(){
        if(mode%2==0){
            props.setColor("white");
            props.setBgColor("black");
            console.log("mode1")
        }

    else{
        props.setColor("black");
        props.setBgColor("white");
        console.log("Mode2");
    }
    setmode(mode+1);
    }
  return (
    <div style={{color:props.color,background:props.bgColor}}>
    <div style={{ marginLeft:"30px",marginTop:"2%",color:props.color,background:props.bgColor}}>
    <div style={{display:"flex",gap:"30px",fontFamily:"poppins",fontWeight:'500',paddingBottom:"20px",fontSize:"20px"}}>
    <div className='headerheading'>Home</div>
    <div className='headerheading'>About Us</div>
    <div className='headerheading'>How?</div>
    <div className='headerheading'>Contect Us</div>
    <div className='headerheading'>ToogleMode</div>
    <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={changemode}/>
    <label class="form-check-label" for="flexSwitchCheckDefault">Switch Mode</label>
    </div>
    <button type="button" class="btn btn-primary" style={{color:props.color,background:props.bgColor,position:"absolute",right:"8%",top:"20px"}}>Download</button>
    </div>
    </div>
    </div>
  )
}
