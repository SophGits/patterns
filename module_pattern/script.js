var Calculator = (function(){
  function add(x,y){
    return x+y;
  }

  function subtract(x,y){
    return x-y;
  }

  function multiply(x,y){
    return x*y;
  }

  function divide(x,y){
    return x/y;
  }

  return{
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
  }
})();


$(document).ready(function(){

  $('button').on("click", function(){

    var firstNum = $('input[name="input1"]').val();
    firstNum = parseInt(firstNum);
    var secondNum = $('input[name="input2"]').val();
    secondNum = parseInt(secondNum);
    var action = $('select[name=action]').val();

    switch( action ){
      case "plus":
        $('.answer').html(Calculator.add(firstNum, secondNum));
        break;
      case "subtract":
        $('.answer').html(Calculator.subtract(firstNum, secondNum));
        break;
      case "multiply":
        $('.answer').html(Calculator.multiply(firstNum, secondNum));
        break;
      case "divide":
        $('.answer').html(Calculator.divide(firstNum, secondNum));
        break;
    }

  });

});


