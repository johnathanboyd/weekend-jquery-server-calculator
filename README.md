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
[] - create user interface w/ two inputs and math operations
[] - create button to submit "="
    [] - handle click to capture input (nums & operator)
    [] - put in object
    [] - send object to server via POST
[] - create clear button to empty inputs
    ***server side***
[] - compute numbers -> send OK
[] - get REQ after the POST to get actual calculation
[] - keep track of history!!
## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
