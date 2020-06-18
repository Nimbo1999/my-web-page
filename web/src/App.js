import React from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button
          variant='primary'
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faArrowRight} /> Learn React
        </Button>
      </header>
    </div>
  );
}

export default App;
