// requires 
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );

// uses
app.use( express.static( 'server/public' ) );
// needed for req.body in POST calls
app.use( bodyParser.urlencoded( { extended: true } ) );

// globals
const port = 5000;
let equations =[];
let elements = [];

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up on:', port );
})

// routes

app.post( '/elements', (req, res)=>{
    console.log( 'in /elements POST');
    // push the recieved object into our inventory array
    elements.push(req.body);
    console.log( elements );
    res.sendStatus( 201 );
    //call my maths function?
    maths(req.body);
    console.log( equations );
})

app.get( '/elements', (req, res)=>{
    console.log( 'in /elements GET');
    res.send( elements );

})

//app.post( '/equations', (req, res )=>{
  //console.log( 'in /equations POST:', req.body );
    //
//})
app.get( '/equations', (req, res)=>{
    console.log( 'in /equations GET')
    res.send (equations);
}) 

// create get for new object
// create get for equations objects

// logic for maths calculations
function maths( elements ){
    console.log('running maths');

    // create a new object with old one
    let equals = {
        val1: elements.num1,
        operator: elements.operation,
        val2: elements.num2,
        sum: ''
    }
    // used if else conditionals for each operator
    if (elements.operation == '+'){
        equals.sum = Number(elements.num1) + Number(elements.num2);
        return equations.push(equals);
    } else if (object.operation == '-'){
        equals.sum = Number(elements.num1) - Number(elements.num2);
        return equations.push(equals);
    } else if (object.operation == '*'){
        equals.sum = Number(elements.num1) * Number(elements.num2);
        return equations.push(equals);
    } else if (object.operation == '/'){
        equals.sum = Number(elements.num1) / Number(elements.num2);
        return equations.push(equals);
    }
    // send that information to new object

}
