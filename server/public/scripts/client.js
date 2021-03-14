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

     let elements = {
         num1: $( '#num1' ).val(),
         operation: operator,
         num2: $( '#num2' ).val(),

     }
    // send object to server via POST
     $.ajax({
         type: 'POST',
         url: '/elements',
         data: elements
     }).then( function(response){
         console.log('back from server POST', response);
         getAnswer();
     }).catch( function( err){
         console.log( 'error:', err)
     })
     getAnswer()
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

function getAnswer(){
    $.ajax({
        type: 'GET',
        url: '/equations',
    }).then(function(response){
        console.log( ' back from GET:', response);
        //target ul and empty
        let el = $( '#equationOut' );
        el.empty();
        for( let i=0; i<response.length; i++){
            el.append(`<li> ${response[i].val1} ${response[i].operator} ${response[i].val2} = ${response[i].sum}</li>`);
        };
    
    }).catch(function (err){
        console.log( 'error:', err);
    })
    }

function displayAnswer(object){
   
}