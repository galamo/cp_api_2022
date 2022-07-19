import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LComponent from "./LcComponent_legacy"
import { CountriesPage } from './components/countries';


function App() {
  const [showCountries, setShowContries] = useState(true)

  const handleToggle = () => {
    setShowContries(!showCountries)
  }

  return (
    <div className="App">

      <button onClick={handleToggle}> Show Countries Component </button>
      {showCountries && <CountriesPage />}
    </div>
  );
}
//   function Users() {
//     return <div>
//       {users.map((u: string) => {
//         return <h3>{u}</h3>
//       })}
//     </div>

//   }
// }

export default App;



