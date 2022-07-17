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
  let currentState: any = []
  let index = 0
  console.log(currentState)
  const useState = (initialState: any) => {
    const localIndex = index
    index++;
    if (!currentState[localIndex]) {
      currentState[localIndex] = initialState
    }
    const setterFunction = (value: any) => {
      currentState[localIndex] = value
    }
    return [currentState[localIndex], setterFunction]
  }
  const resetIndex = () => index = 0
  return {
    useState,
    resetIndex
  }


})()

const { useState, resetIndex } = ReactCheckPoint;

const MyComponent = () => {
  const [value, setValue] = useState(1)
  const [name, setName] = useState("gal")
  if (value !== 2) {
    setValue(value + 1)
    setName("gad")
  }

  const render = () => { console.log(value, name) }
  return { render };
}
MyComponent().render()
resetIndex()
MyComponent().render()


