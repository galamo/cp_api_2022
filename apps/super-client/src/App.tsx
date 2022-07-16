import React, { useEffect, useLayoutEffect } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    axios
      .get("https://restcountries.com/v3.1/all", {
        cancelToken: source.token
      }).then(console.log)
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('successfully aborted');
        } else {
          // handle error
        }
      });
    return () => {
      console.log("unmounted")
      // cancel the request before component unmounts
      source.cancel();
    };
  }, []);


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
