import React from 'react'
import first from '../images/first.png'
import second from '../images/second.png';
import third from '../images/thrid.png';
import '../css/about.css'
export default function About() {
  return (
    <div>
      <div style={{textAlign:"center", fontFamily:"poppins",fontSize:"30px",fontWeight:"900"}}>About</div>
      <div style={{display:"flex",justifyContent:"center",marginTop:"25px",marginBottom:"50px"}}>
      <div style={{display:"flex",gap:"7%"}}>
        <div className='aboutbox'>
            <div className='boxheading'>Use Your Mouse Without Hands</div>
            <div style={{display:"flex",justifyContent:"center",paddingTop:"30px"}}><img src={first} style={{height:"150px"}}></img></div>
            <div className='boxdescription' style={{paddingTop:'30px'}}>uses the camera tracker and to move mouse pointer to where you looking</div>
        </div>
        <div className='aboutbox'>
            <div className='boxheading'>Speed And Precision</div>
            <div style={{display:"flex",justifyContent:"center"}}><img src={second} ></img></div>
            <div className='boxdescription'>Experience seamless control with our Python program: navigate with the precision of your gaze, at the speed of thought</div>
        </div>
        <div className='aboutbox'>
            <div className='boxheading'>Supports Multi Os</div>
            <div style={{display:"flex",justifyContent:"center"}}><img src={third}></img></div>
            <div className='boxdescription'>Empower your interaction across all operating systems with our versatile Python program: seamlessly control your mouse with eye movements, regardless of your device's platform.</div>
        </div>
      </div>
    </div>
    </div>
  )
}
