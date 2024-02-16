import React from 'react';
import { isWindows, isMacOs } from 'react-device-detect';

const DownloadComponent = () => {
  return (
    <div>
      {isWindows && (
        <p>
          <a href="/download/windows">
          <i class="fa-brands fa-windows" style={{paddingRight:"20px"}}></i>
          Download for Windows
          </a>
        </p>
      )}
      {isMacOs && (
        <p>
          <a href="/download/macos">
          <i class="fa-brands fa-apple" style={{paddingRight:"20px"}}></i>
            Download for macOS</a>
        </p>
      )}
      {!isWindows && !isMacOs && (
        <p>Sorry, your operating system is not supported for download.</p>
      )}
    </div>
  );
};

export default DownloadComponent;
