import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import './App.css';

import test from './test';
class header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React On Github Lab
          </p>
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <a href="#/login"><Button bsStyle="success">Resume</Button></a>
          
        </header>
      </div>
    );
  }
}

export default header;
