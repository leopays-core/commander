import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';


const { remote } = window.require('electron');

function App() {
  //console.log('react app NODE_ENV', process.env.NODE_ENV); undefined
  //console.log('remote.app.isPackaged', remote.app.isPackaged); undefined
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Hello World!</h1>
        <p>We are using Node.js <span id="node-version"></span>,</p>
        <p>Chromium <span id="chrome-version"></span>,</p>
        <p>and Electron <span id="electron-version"></span>.</p>
      </header>
    </div>
  );
}

export default App;
