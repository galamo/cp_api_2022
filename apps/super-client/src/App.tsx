import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LComponent from "./LcComponent_legacy"
import { CountriesPage } from './components/countries';
import Button from '@material-ui/core/Button';


function App() {
  console.log("App component render")
  const initialState: Array<string> = ["Sergey"]
  const [users, setUsers] = useState(initialState)
  const [showCountries, setShowCountries] = useState(true)
  console.log("App component return")
  return (
    <div className="App">
      <Button onClick={() => {
        setShowCountries(!showCountries)
      }} variant="contained">Show Countries</Button>

      {/* <h1> Users <button onClick={() => {
        setShowCountries(!showCountries)
        setUsers([...users, `user_${Math.ceil(Math.random() * 999)}`])
      }} > generate user </button> </h1> */}
      {/* <LComponent /> */}
      {/* <Users /> */}

      {showCountries && <CountriesPage />}
    </div >
  );

  function Users() {
    return <div>
      {users.map((u: string) => {
        return <h3>{u}</h3>
      })}
    </div>

  }
}

export default App;



