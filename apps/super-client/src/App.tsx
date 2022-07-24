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
    path: "/country-page/:name",
    element: <CountryPage />,
    text: "TEXT"
  },
  {
    path: "/login",
    element: <Login />,
    text: "login",
    isVisible: true
  },


]

// function App() {
//   try {
//     return (
//       <div className="App">
//         <BrowserRouter>
//           <ButtonAppBar />
//           <Routes>
//             {routes.map((r: IRoute) => {
//               return <Route key={r.path} {...r} />
//             })}
//           </Routes>
//         </BrowserRouter>
//       </div>
//     );
//   } catch (ex) {
//     return <h1> Sorry something went wrong, and we are working to fix it <a href="/"> Click to refresh </a> </h1>
//   }
// }


class App extends React.Component<any, any, any>{
  constructor(props: any) {
    super(props)
    this.state = { showError: false }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ showError: true })
  }


  render() {
    if (this.state.showError) {
      return <ErrorComponent />
    }
    else {
      return (
        <div className="App" >
          <BrowserRouter>
            <ButtonAppBar />
            <Routes>
              {routes.map((r: IRoute) => {
                return <Route key={r.path} {...r} />
              })}
            </Routes>
          </BrowserRouter>
        </div>
      )
    }

  }
}

function ErrorComponent() {
  return <h1> Sorry something went wrong, and we are working to fix it <a href="/"> Click to refresh </a> </h1>
}

export default App;



