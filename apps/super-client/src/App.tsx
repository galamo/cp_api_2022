import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LComponent from "./LcComponent_legacy"
import { CountriesPage } from './components/countries';
import ImageCp from './components/ui-components/imageCp';
import Vacations from './components/vacations';
import ButtonAppBar from './components/app/appBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/pages/notFoundPage';
import Register from './components/pages/register';
import Login from './components/pages/login';
import CountryPage from './components/pages/countryPage';

export interface IRoute {
  path: string,
  element: React.ReactElement
  text: string,
  isVisible?: boolean


}

export const routes = [
  {
    path: "/",
    element: <Vacations />,
    text: "vacations",
    isVisible: true
  },
  {
    path: "/countries",
    element: <CountriesPage />,
    text: "countries",
    isVisible: true
  },
  {
    path: "/country-page/:name",
    element: <CountryPage />,
    text: "countries",

  },
  {
    path: "*",
    element: <NotFoundPage />,
    text: "not found"
  },
  {
    path: "/register",
    element: <Register />,
    text: "register",
    isVisible: true
  },
  {
    path: "/login",
    element: <Login />,
    text: "login",
    isVisible: true
  },


]

function App() {
  const [showCountries, setShowContries] = useState(true)

  const handleToggle = () => {
    setShowContries(!showCountries)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <ButtonAppBar />
        <Routes>
          {routes.map((r: IRoute) => {
            return <Route key={r.path} {...r} />
          })}
        </Routes>
      </BrowserRouter>
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



