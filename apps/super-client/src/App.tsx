import React, { useEffect, useLayoutEffect } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

function App() {




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


const ReactCheckPoint = (() => {
  
  const useState = (initialState: any) => {

    let currentState = initialState

    const setterFunction = (value: any) => {
      currentState = value
    }

    return [currentState, setterFunction]
  }

  return {
    useState
  }


})()

const { useState } = ReactCheckPoint;

const MyComponent = () => {
  const [value, setValue] = useState(1)
  if (value !== 2) {
    setValue(2)
  }
  const render = () => { console.log(value) }
  return { render };
}
MyComponent().render()
MyComponent().render()


