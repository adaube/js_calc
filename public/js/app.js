$(document).ready(function(){
  var calculator = Object.create(Calculator);
  var display = $('#display');
  var lastOperation = '';


  $('#clear').on('click', clear);
  $('#add').on('click', plus);
  $('#equal').on('click', equal);
  $('#subtract').on('click', subtract);
  $('#multiply').on('click', multiply);
  $('#divide').on('click', divide);
  $('.num').on('click', updateDisplay);
  $('mem-plus').on('click', memAdd);
  $('mem-minus').on('click', memSub);
  $('mem-recall').on('click', memDisplay);
  $('mem-clear').on('click', memClear);


  function updateDisplay(){
      var numVal = $(this).text();
      if (display.text() === '0'){
        display.text(numVal);
      }else if (display.text().length < 8) {
        display.text(display.text() + numVal);
      }else{
        display.text(display.text());
      }
      console.log(display.text);
  }


  function divide(){
    console.log(result);
    // var divideInput = parseFloat(display.text());
    // display = 0;
    // updateDisplay(display.text);
    // var divideInputTwo = parseFloat(display.text);
    // updateDisplay(divide(divideInputTwo));
  }

  function multiply(){

  }

  function subtract(){

  }

  function equal(){
    var disText = display.text();
    var num = parseFloat(disText);
    if ( lastOperation === '+' ){
      calculator.add(num);
      var result = calculator.result();
      display.text(result);
      calculator.reset();
    }
  }

  function plus(){
    var disText = display.text();
    var num = parseFloat(disText);
    calculator.add(num);
    display.text(0);
    lastOperation = '+';
  }

  function clear(){

  }

  function memAdd(){

  }

  function memSub(){

  }

  function memClear(){

  }

  function memDisplay(){

  }



});
