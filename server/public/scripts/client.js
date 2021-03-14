$( document ).ready( onReady );
let operator = "";
function onReady(){
    console.log( 'jQ' );
    // Click handlers
    $( '#equalButton').on('click', getNums );
    $( '.operators' ).on('click', '#addButton', operation );
    $( '.operators' ).on('click', '#minusButton', operation );
    $( '.operators' ).on('click', '#multiplyButton', operation );
    $( '.operators' ).on('click', '#divideButton', operation );
    $( '#clearButton').on('click', clear);
    // initialization

} // end onReady

function getNums(){
    console.log( 'in getNums');
     // get user inputs & put into Object

     let equation = {
         num1: $( '#num1' ).val(),
         operation: operator,
         num2: $( '#num2' ).val(),

     }
    // send object to server via POST
     $.ajax({
         type: 'POST',
         url: '/calculations',
         data: equation
     }).then( function(response){
         console.log('back from server POST', response);
     }).catch( function( err){
         console.log( 'error:',)
     })
    // if successful send OK
    // catch errors
}

function operation(){
    operator = this.value;
}// end operation 

function clear(){
    console.log('test');
    $( '.input' ).val('');
    let operator = "";
}// end clear
