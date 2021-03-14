$( document ).ready( onReady );

function onReady(){
    console.log( 'jQ' );
    // Click handlers
    $( '#equalButton').on('click', getNums );
    $( '.operators' ).on('click', operation );
    // initialization
    
} // end onReady

function getNums(){
    console.log( 'in getNums');
     // get user inputs & put into Object
     let equation = {
         num1: $( '#num1' ).val(),
         //operator: ,
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
    console.log( 'in operation', $( this ).data( 'maths' ))
    //if( $( '#addButton').on('click' )){
      //  console.log( )
        //return '+'
    //} 
}// end operation