import React from 'react';
import eyeball from '../images/eyeball.png';
import eyebody from '../images/eyebody.png';
import DownloadComponent from './Download-Component';
export default function Home(props) {
  // document.onmousemove=function(){
  //   var x=event.clientX*100/windows.innerWidth+'%';
  //   var y=event.clientY*100/windows.innerWidth+'%';
  // }
  
  return (
    <>
    <div style={{ paddingTop: "120px" ,display:"flex" ,paddingBottom:'10px'}}>
        <div style={{position:"relative",top:"-20px"}}>
      <div style={{ position: "relative", left: "150px", fontFamily: "poppins",fontWeight:"700", fontSize: '40px' }}>Control With Eye</div>
      <div style={{ width: '500px', position: "relative", left: "150px", fontFamily: "poppins", fontWeight: "400",fontSize:"15px" }}>Navigate effortlessly with our groundbreaking program: control your mouse with just a glance.</div>
      </div>
      <div>
        <img src={eyebody} alt="Eye Cursor" style={{position:"relative",top:"-100px",left:"300px",width:"40%"}} />
        <img src={eyeball} alt="Eye Cursor" style={{position:"absolute",top:"120px",left:"825px",width:"20%" ,}} />
      </div>
    </div>
    <div><button type="button" class="btn btn-primary" style={{color:props.color,background:props.bgColor,position:'relative',top:"-150px",left:"15%"}}><DownloadComponent></DownloadComponent></button></div>
    </>
  );
}
