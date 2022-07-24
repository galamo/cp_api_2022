import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LComponent from "./LcComponent_legacy"
import { CountriesPage } from './components/countries';
import ImageCp from './components/ui-components/imageCp';
import Vacations from './components/vacations';
import { BrowserRouter, Link, Navigate, Outlet, Route, Routes } from 'react-router-dom';


function App() {
  const [showCountries, setShowContries] = useState(true)

  const handleToggle = () => {
    setShowContries(!showCountries)
  }
  const routes = [
    {
      path: "/auth",
      element: < Main />,
      childrens: [
        {
          path: "register",
          element: <h1>Register</h1>
        },
        {
          index: true,
          element: <h1>Sub Route Index</h1>
        }
      ]
    },
    {
      path: "/another-route",
      element: <h1>another route</h1>,
      isProtected: true
    }, {
      path: "*",
      element: <h2> Not found route!</h2>
    }
  ]
  return (
    <div className="App">

      <BrowserRouter>
        <Link to="another-route">another</Link>
        <Link to="auth/register">Register</Link>
        <Link to="auth">main</Link>
        <Routes>
          {/* {routes.map((r) => {
            return r.childrens ? <Route {...r}>
              {r.childrens.map((child) => {
                return <Route {...child} />
              })}
            </Route> :
              r.isProtected ? <ProtectedRoute>
                <Route {...r} />
              </ProtectedRoute> : <Route {...r} />

          })} */}
          <Route path="/auth" element={<Main />}>
            <Route path="register" element={<div> This is items </div>} />
            <Route index element={<h2>sub route index</h2>} />
          </Route>
          <Route path="/another-route" element={<div> another route</div>} />
          {/* <Route path='/protect' element={<ProtectedRoute />}>
            <Route path='/' element={<Home />} />
          </Route> */}
          <Route path="*" element={<h2>No match!</h2>} />
        </Routes>
      </BrowserRouter>
      <div>
        {/* <ImageCp imageUrl={"https://www.checkpoint.com/wp-content/uploads/check-point-logo-large.png"} />
        <ImageCp imageUrl={""} />
        <ImageCp imageUrl={"https://www.checkpoint.com/wp-content/uploads/noimage.png"} /> */}
      </div>
      <div>
        {/* <Vacations /> */}
      </div>
      {/* <div>
        <button onClick={handleToggle}> Show Countries Component </button>
      </div>
      {showCountries && <CountriesPage />} */}
    </div>
  );
}

function Main(props: any) {
  return <div>
    <h1> main </h1>
    <Outlet />
  </div>
}

const ProtectedRoute = ({ user, children }: any) => {
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  return children;
};

//   function Users() {
//     return <div>
//       {users.map((u: string) => {
//         return <h3>{u}</h3>
//       })}
//     </div>

//   }
// }

export default App;



