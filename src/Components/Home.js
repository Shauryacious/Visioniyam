import React, { useEffect } from 'react';
import data from '../animations/home.json';
import DownloadComponent from './Download-Component';
import Lottie from 'lottie-react';

export default function Home(props) {
  return (
    <>
      <div style={{ paddingTop: "120px", display: "flex", paddingBottom: '10px',gap:"300px" }}>
        <div style={{ position: "relative", top: "-20px" }}>
          <div style={{ position: "relative", left: "150px", fontFamily: "poppins", fontWeight: "700", fontSize: '40px' }}>Control With Eye</div>
          <div style={{ width: '500px', position: "relative", left: "150px", fontFamily: "poppins", fontWeight: "400", fontSize: "15px" }}>Navigate effortlessly with our groundbreaking program: control your mouse with just a glance.</div>
        </div>
        <div>
          <Lottie animationData={data} style={{width:"300px",position:'relative',top:"-80px"}}></Lottie>
        </div>
      </div>
      <div style={{ position: 'relative', top: "-150px", left: "15%" }}>
        <button type="button" class="btn btn-primary" style={{ color: props.color, background: props.bgColor }}>
          <DownloadComponent />
        </button>
      </div>
    </>
  );
}
