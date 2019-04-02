import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import './App.css';

import test from './test';
import Header from './header';
import Resume from './components/Resume';
import MacLogin from './components/MacLogin';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React On Github Lab
          </p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button bsStyle="success">Resume</Button>
        </header> */}

        <HashRouter>
        <div className="App">
          {/* <Link to="test">test</Link> */}

          <Switch>
              <Route exact path="/" component={Header}/>
              <Route exact path="/resume" component={Resume}/>
              <Route exact path="/login" component={MacLogin}/>
              <Route exact path="/test" component={test}/>
          </Switch>
        </div>
        </HashRouter>
        
      </div>

      
    );
  }
}

export default App;
