import React from 'react';
import eyeImage from '../images/eye-svgrepo-com.svg';

export default function Home(props) {
  return (
    <>
    <div style={{ paddingTop: "120px" ,display:"flex" }}>
        <div style={{position:"relative",top:"-20px"}}>
      <div style={{ position: "relative", left: "10px", fontFamily: "poppins", fontSize: '70px' }}>Control With Eye</div>
      <div style={{ width: '700px', position: "relative", left: "10px", fontFamily: "poppins", fontWeight: "300",fontSize:"20px" }}>Empower your computer experience with our innovative software, enabling you to effortlessly steer your cursor with nothing but the movement of your eyes.</div>
      </div>
      <div><img src={eyeImage} alt="Eye Cursor" style={{position:"relative",top:"-150px",width:"90%"}} /></div>
    </div>
    <div><button type="button" class="btn btn-primary" style={{color:props.color,background:props.bgColor,position:'relative',top:"-250px",left:"15%"}}>Download software</button></div>
    </>
  );
}
