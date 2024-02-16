import React from 'react';
import { isWindows, isMacOs } from 'react-device-detect';

const DownloadComponent = () => {
  return (
    <div>
      {isWindows && (
        <p>Download for Windows: <a href="/download/windows">Click here</a></p>
      )}
      {isMacOs && (
        <p>Download for macOS: <a href="/download/macos">Click here</a></p>
      )}
      {!isWindows && !isMacOs && (
        <p>Sorry, your operating system is not supported for download.</p>
      )}
    </div>
  );
};

export default DownloadComponent;
