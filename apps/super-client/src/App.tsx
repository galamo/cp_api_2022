import React, { createContext, Suspense, useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LComponent from "./LcComponent_legacy"
import { CountriesPage } from './components/pages/countries';
import ImageCp from './components/ui-components/imageCp';
import Vacations from './components/pages/vacations';
import ButtonAppBar from './components/app/appBar';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/pages/notFoundPage';
import Register from './components/pages/register';
import Login from './components/pages/login';
import CountryPage from './components/pages/countryPage';
import SecurePage from './components/pages/securePage';
import Reports from './components/pages/reports';
import { CircularProgress } from '@material-ui/core';
import Settings from './components/pages/settings';

const ReportsLazy = React.lazy(() => import("./components/pages/reports"))
const CountriesReportsPageLazy = React.lazy(() => import("./components/pages/countriesReports"))



export interface IRoute {
  path: string,
  element: React.ReactElement
  text: string,
  isVisible?: boolean,
  isProtected?: boolean


}

export const routes = [

  {
    path: "/",
    element: <CountriesPage />,
    text: "countries",
    isVisible: true
  },
  {
    path: "/vacations",
    element: <Vacations />,
    text: "vacations",
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
  {
    path: "secure",
    element: <SecurePage />,
    text: "secure page",
    isVisible: true,
    isProtected: true
  },
  {
    path: "reports",
    element: <ReportsLazy />,
    text: "Reports",
    isVisible: true,
    isProtected: false
  },
  {
    path: "countries-reports",
    element: <CountriesReportsPageLazy />,
    text: "Countries Reports",
    isVisible: true,
    isProtected: false
  },
  {
    path: "settings",
    element: <Settings />,
    text: "Settings",
    isVisible: true,
    isProtected: false
  }
]

interface IGlobalState {
  pieChartSettings: string,
  dispatch?: Function
}

const initialState: IGlobalState = {
  pieChartSettings: "precentage"
}

export const GlobalState = createContext<IGlobalState>(initialState)



const ProtectedRoute = () => {
  const auth = window.localStorage.getItem("token")
  return auth ? <Outlet /> : <Navigate to="/login" />;

};

// class App extends React.Component<any, any, any>{
//   constructor(props: any) {
//     super(props)
//     this.state = { showError: false }
//   }

//   componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
//     this.setState({ showError: true })
//   }
//   handler() {

//   }
function reducerFn(state: IGlobalState, action: { type: string, payload?: any }) {
  switch (action.type) {
    case "SET_PIECHART_SETTINGS": {
      return { ...state, pieChartSettings: action.payload }
    }
    default: {
      return state;
    }
  }
}
function App() {

  // @ts-ignore

  const [state, dispatch] = useReducer(reducerFn, initialState)

  // if (this.state.showError) {
  //   return <ErrorComponent />
  // }

  return (
    <div className="App" >
      <BrowserRouter>
        <ButtonAppBar />
        <Suspense fallback={<CircularProgress />}>
          <GlobalState.Provider value={{ pieChartSettings: (state as any).pieChartSettings, dispatch }}>
            <Routes>
              {routes.map((r: IRoute) => {
                return r.isProtected ? <Route key={r.path} path='/' element={<ProtectedRoute />}>
                  <Route key={r.path} {...r} />
                </Route> : <Route key={r.path} {...r} />
              })}
            </Routes>
          </GlobalState.Provider>
        </Suspense>
      </BrowserRouter>
    </div>
  )



}

function ErrorComponent() {
  return <h1> Sorry something went wrong, and we are working to fix it <a href="/"> Click to refresh </a> </h1>
}

export default App;



