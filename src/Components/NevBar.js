import React from 'react'
import { useState } from 'react';
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
    <div style={{marginLeft:"20%",marginTop:"2%",color:props.color,background:props.bgColor}}>
    <div style={{display:"flex",gap:"50px",fontFamily:"poppins",fontWeight:'500',paddingBottom:"20px"}}>
    <div>Home</div>
    <div>About Us</div>
    <div>How?</div>
    <div>Contect Us</div>
    <div>ToogleMode</div>
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
