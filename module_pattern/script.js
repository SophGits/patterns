(function( window, undefined ) {

  function Calculate() {

    this.add = function add(num1, num2) {
      this.answer(num1 + num2)
    };

    this.subtract = function subtract(num1, num2) {
      this.answer(num1 - num2)
    };

    this.multiply = function multiply(num1, num2) {
      this.answer(num1 * num2)
    };

    this.divide = function divide(num1, num2) {
      this.answer(num1/num2)
    };

    this.answer = function(ans){
      $('.answer').html(ans);
    }

  }

  // expose access to the constructor
  window.Calculate = Calculate;

})( window );


$(document).ready(function(){

  $('button').on("click", function(){

    var calculate = new Calculate();

    var firstNum = $('input[name="input1"]').val();
    firstNum = parseInt(firstNum);
    var secondNum = $('input[name="input2"]').val();
    secondNum = parseInt(secondNum);
    var action = $('select[name=action]').val();

    switch( action ){
      case "plus":
        calculate.add(firstNum, secondNum);
        break;
      case "subtract":
        calculate.subtract(firstNum, secondNum);
        break;
      case "multiply":
        calculate.multiply(firstNum, secondNum);
        break;
      case "divide":
        calculate.divide(firstNum, secondNum);
        break;
    }

  });

});


