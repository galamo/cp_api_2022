# API

#### Prerequisites 
- [Node.js version 16 installed](https://nodejs.org/en/download/)
- NPM installed (part of Node.js installation) 
- [Docker for desktop installed](https://docs.docker.com/desktop/install/windows-install/)
- [create react app package](https://www.npmjs.com/package/create-react-app)

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
- http://localhost:2200/users
