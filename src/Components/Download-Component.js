import React from 'react';
import { isWindows, isMacOs } from 'react-device-detect';
import { FaWindows } from "react-icons/fa";

const DownloadComponent = () => {
  return (
    <div>
      {isWindows && (
        <p>
          <a href="/download/windows">
          <FaWindows/>Download for Windows
          </a>
        </p>
      )}
      {isMacOs && (
        <p>
          <a href="/download/macos">Download for macOS</a>
        </p>
      )}
      {!isWindows && !isMacOs && (
        <p>Sorry, your operating system is not supported for download.</p>
      )}
    </div>
  );
};

export default DownloadComponent;
