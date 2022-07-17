import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // console.log("App component render")
  // const initialState: Array<string> = ["Sergey"]
  // const [users, setUsers] = useState(initialState)
  // console.log("App component return")
  return (
    <div className="App">
      {/* <h1> Users <button onClick={() => {
        setUsers([...users, `user_${Math.ceil(Math.random() * 999)}`])
      }} > generate user </button> </h1>
      {users.map((u: string) => {
        return <h3>{u}</h3>
      })} */}
    </div>
  );
}

export default App;



const ReactCheckpoint = (() => {

  let value: any;
  const useState = (initialState: any) => {
    console.log("value in hook", value)
    if (!value) {
      value = initialState
    }
    const setterFunction = (newValue: any) => {
      value = newValue
    }
    return [value, setterFunction]

  }

  return {
    useState
  }

})()

const { useState } = ReactCheckpoint
const MyComponent = () => {
  const [value, setValue] = useState(1)
  const [name, setName] = useState("name")

  if (value !== 2) {
    setValue(2)
  }
  const render = () => console.log("render component", value, name)
  return { render }
}

MyComponent().render()
MyComponent().render()
