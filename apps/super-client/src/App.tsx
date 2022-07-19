import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LComponent from "./LcComponent_legacy"
import { CountriesPage } from './components/countries';
import ImageCp from './components/ui-components/imageCp';


function App() {
  const [showCountries, setShowContries] = useState(true)

  const handleToggle = () => {
    setShowContries(!showCountries)
  }

  return (
    <div className="App">

      <div>
        <ImageCp imageUrl={"https://www.checkpoint.com/wp-content/uploads/check-point-logo-large.png"} />
        <ImageCp imageUrl={""} />
        <ImageCp imageUrl={"https://www.checkpoint.com/wp-content/uploads/noimage.png"} />
      </div>
      <div>
        <button onClick={handleToggle}> Show Countries Component </button>
      </div>
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



