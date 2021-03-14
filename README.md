# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Step 1: setting up
[X] - npm init --y
[X] - npm install express
[X] - set up folders:
        - /server
            - /public
                -/scripts
                -/styles
                -/vendors               
[X] - move jQuery => /vendors
[X] - create index.html => /public
[X] - create client.js => /scripts
[X] - create server.js => /server

## Step 2: spin up server
***in server.js***
[X] - require express
[X] - create app
[X] - app.use express.static on server/public
[X] - spin up server on port 5000
[X] - add start script to package.json:
    *** "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server/server.js"
    },*** 

## Step 3: spit some LOGIC!
[X] - create user interface w/ two inputs and math operations
[X] - create button to submit "="
    [X] - handle click to capture input (nums & operator)
    [X] - put in object
    [X] - send object to server via POST
[X] - create clear button to empty inputs
    ***server side***
[X] - compute numbers -> send OK
[X] - get REQ after the POST to get actual calculation
[X] - keep track of history!!
## Description

For this problem we were tasked to create a calculator for a user to use in the browser. Our calculations were meant to occur on the server using POST/GET methods and send results back to the DOM for the user. 
Once all of the required files were created the first step was to ensure that the client file was able to communicate with the server.js file.
User interface was created such as inputs and buttons to collect data. The data is then wrapped up into an object and beamed up to a server file to be process.
In the server file, data is run through a function to be processed according to the client request. once processed the data is then compiled into a new array!
The new array is then sent back down to the client and then displayed on the DOM or users browser!

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
