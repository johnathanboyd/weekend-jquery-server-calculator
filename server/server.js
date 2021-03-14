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
let calculations = {};

// spin up server
app.listen( port, ()=>{
    console.log( 'server is up on:', port );
})
// routes
app.get( '/calculations', (req, res)=>{
    console.log( 'in /calculations GET');
    res.send( calculations );

}) 

app.post( '/calculations', (req, res)=>{
    console.log( 'in post');
    calculations = req.body;
    console.log( calculations );
    res.send( 'OK' );

})