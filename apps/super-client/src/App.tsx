import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LComponent from "./LcComponent_legacy"
import { CountriesPage } from './components/countries';
import { CountriesTable } from './components/countries/table';

function App() {
  const initialState: Array<string> = ["Sergey"]
  const [users, setUsers] = useState(initialState)
  return (
    <div className="App">
      {/* <h1> Users <button onClick={() => {
        setUsers([...users, `user_${Math.ceil(Math.random() * 999)}`])
      }} > generate user </button> </h1> */}
      {/* <LComponent />
      <Users />
      <CountriesPage /> */}
      <CountriesTable />
    </div>
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



