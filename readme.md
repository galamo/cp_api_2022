# API

#### Prerequisites 
- [Node.js version 16 installed](https://nodejs.org/en/download/)
- NPM installed (part of Node.js installation) 
- [Docker for desktop installed](https://docs.docker.com/desktop/install/windows-install/)
- [Create react app package](https://www.npmjs.com/package/create-react-app)

###### Verification
- open command line & run the following commands:
1.  
    ```cmd
    node -v
    ```
    expected result:
    ```cmd
    v16.14.2
    ```
    <br>
2.  
    ```cmd
    npm -v
    ```
    expected result:
    ```cmd
    6.14.17
    ```
    <br>
3.   
    ```cmd
    docker -v
    ```
    expected result:
    ```cmd
    Docker version 20.10.7, build f0df350
    ```


### Running the project
1. `cd dev-apps`
2. `docker-compose up`
3. <b>Wait 2-3 min for Databases and Api retry connection</b>
4.  Open Chrome/Firefox and browse to
- http://localhost:2200/health-check
    expected result:
    ```cmd
    {"message":"api is ready"}
    ```
- http://localhost:2200/users
    expected result:
    ```cmd
    {"result":{"id":1,"user_name":"checkpoint@checkpoint.com","first_name":"dev","last_name":"dev"}}
    ```


# React


#### Api's
- [Products](https://dummyjson.com/docs/products/)
- [Countries](https://restcountries.com/v3.1/all)

#### Creating React Typescript Application
- `npx create-react-app react-client --template typescript`
- `cd react-client`
- `npm start`
#### packages
1. https://mui.com/material-ui/getting-started/installation/
`npm install @mui/material @emotion/react @emotion/styled`
2. axios - http requests
`npm i axios`
3. moment
`npm i moment`
4. react-router-dom
`npm i react-router-dom`
5. build & analyze
`npm install --save source-map-explorer`
`source-map-explorer 'build/static/js/*.js'`

### Before starting:
1. Javascript For react
2. Event loop example
3. Async programing ( callback, promise, async-await)
3. TypeScript
4. run `npm install typescript -g`
5. use cuncurrently

#### JSX
- Embedding Expressions in JSX
- JSX is an Expression
- Specifying Attributes with JSX
- Specifying Children with JSX
- JSX Prevents Injection Attacks
- JSX Represents Objects

#### Rendering Elements
#### Components and Props
- Function and Class Components
- Rendering a Component
- Compose components
- Props

#### State
- Object
- Local Component State
- Global State 

#### Lifecycle methods (L)
- Mount
- Update
- Unmount

#### Events in React
#### Conditional rendering
#### Keys
#### Lifting State up



## Hooks
- useState 
- useEffect
- useRef
- useMemo
- useCallback
- useContext
- useReducer

## Advanced
- Redux state management
- HOC 
- Buld react app - source map explorer
- Error bounderies 


### EX-1
- Create your own IdCard Component
based on your information 
- `lastName`: A string
- `firstName`: A string
- `gender`: A string, 'male' or 'female'
- `height`: A number
- `birth`: A date
- `picture`: A string

```js
<IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

```
### EX-1 Typescript
1. Create the following inteface: `ICountry`
2. country will have: name, flag, total population
3. create instance for israel country and print it.

### EX-2 
1. Toggle Countries Rendering
### EX-2
- Add New Route Countries Route
### EX-3
- Go to [Countries](https://restcountries.com/v3.1/all)
- Copy the countries from the result.
- Open new file `data.json` inside the src folder.
- Import the data.
- Present the countries in list of `CountryCard` components. 


### EX-4
- Create Login form 

### EX-5
- Convert the `data.json` file to `http` request
- use useEffect
- Store the result in your local state - use `useState`




## Examples
- useState under the hood
- useEffect ( cleanup ) - aborting




# Questions

1. Async await

- what will be the output here? 

```javascript

async function getFromServer() {
    console.log(944);
    const result = await axios.get("http://mako1.co.il")
    console.log(953);
}

async function getFromServer2() {
    console.log(955);
    const result = await axios.get("http://mako2.co.il")
    console.log(933);
}

console.log(8888)
getFromServer2()
getFromServer()
console.log(1111)

```