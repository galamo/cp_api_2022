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
    in case you are working with other npm version please run
    ```
    npm install npm@6.14.17 -g
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
2. `docker compose up --build `
3. <b>Wait 2-3 min for Databases and Api retry connection</b>
4.  Open Chrome/Firefox and browse to
- http://localhost:2200/health-check
    expected result:
    ```cmd
    {"message":"api is ready"}
    ```
- http://localhost:2200/countries-delay/name/:name
    delay response
    expected result:
    ```cmd
    {"data":[{"name":{"common":"Israel"...
    ```
- http://localhost:2200/countries/code/isr
    expected result:
    ```cmd
    {"data":[{"name":{"common":"Israel"...
    ```
-  ```cmd
    1. POST /auth/register HTTP/1.1
    Host: localhost:2200
    Content-Type: application/json
    Authorization: 1
    Content-Length: 56

    {
        "userName":"string",
        "password":"string"
    }

    2. POST /auth/login HTTP/1.1
    Host: localhost:2200
    Content-Type: application/json
    Authorization: 1
    Content-Length: 55

    {
        "userName":"string",
        "password":"string"
    }

    3. GET /secure HTTP/1.1
    Host: localhost:2200
    Content-Type: application/json
    Authorization: string
```

# React

# Material UI
`npm install @material-ui/core`
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
1. Create the following interface: `ICountry`
2. country will have: name, flag, total population
3. create instance for israel country and print it.

### Keys in react


### EX-2 
1. Toggle Countries Rendering to show unmount aborting request
2. Toggle Products 

### EX-3 
- Create an Image component
- image should get a URL string
- in case the URL is missing - present the `defaultImage`
- `defaultImage`: https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg
- advanced - check if the image is not loaded as well and show the default image
### EX-4
- style css module
- create your own style module by adding the following file to Header component

### EX-5
- Implement Toggle Products Page
- Create `ProductPage` component
- fetch the products from the following api - https://dummyjson.com/products
- Create `Product` Component
- Present all the Products in the `ProductsPage`

### EX-6
- based on your Products result
- Memoize the Avg price
- Present it as product statistics


### EX-7
- Create A button in login page: "click here to register"
- Clicking on the button will move the client ot the registration page
- Remove the register from the router


### EX-8
- implement the login component
- please see the POST Login operation


### React Router DOM

`npm install react-router-dom@6`


### Subjects 23-7
- useRef
    1. current reference mutation
    2. reference to DOM
- React router DOM
- useState Vs useRef
- useContext , useReducer
- axios interceptor 
- nested rotes


### Subjects 4-8
- useContext , useReducer
- nested routes

### EX - 9
- Add New Route Countries Route



### EX Create Login form - 10


## Subjects
1. code splitting
2. useReducer, useContext
3. async operations



### EX - 11 Code splitting
1. Create New Route - `Countries Reports`
2. use Code splitting approach to lazy load this component
3. Add new Component Name: `PieChartCountriesPopulation` ( based on recharts)
4. Using the countries data fetching - show every region & population on the chart
5. optimize your component load with React.memo


### EX - 12 useContext & useReducer
1. Create AppDate component which present the current date when reports loaded
2. support toggle functionality - between local and UTC 
3. use Switch component `https://v4.mui.com/components/switches/`


### Subjects:
1. Redux toolkit 
2. Testing

### EX - 13
Redux toolkit
1. migrate the is utc state to the setting reducer
2. create new reducer for reports and store the numbers/precentage state inside  
### EX - 14 
1. Write a unit test for region population calculation function - `calcPopulationPerRegion`
- test correct flow
- false positive
- null / string calculation 


### EX - 15
1. Write a unit-ui test for setting the user name flow in redux
2. assert that the user is rendered to the header 







## Examples
- useState under the hood
- useEffect ( cleanup ) - aborting
- installing react material
- conditional rendering
- creating the country component

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