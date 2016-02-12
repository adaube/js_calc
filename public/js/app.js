$(document).ready(function() {
  var calculator = Object.create(Calculator);
  var display = $('#display');
  var lastOperation = '';


  $('#clear').on('click', clear);
  $('#add').on('click', add);
  $('#equal').on('click', equal);
  $('#subtract').on('click', subtract);
  $('#multiply').on('click', multiply);
  $('#divide').on('click', divide);
  $('.num').on('click', updateDisplay);
  $('#mem-plus').on('click', memAdd);
  $('#mem-minus').on('click', memSub);
  $('#mem-recall').on('click', memDisplay);
  $('#mem-clear').on('click', memClear);


  function updateDisplay() {
    var numVal = $(this).text();
    if (display.text() === '0') {
      display.text(numVal);
    } else if (display.text().length < 8) {
      display.text(display.text() + numVal);
    } else {
      display.text(display.text());
    }
  }


  function divide() {
    var disText = display.text();
    var num = parseFloat(disText);
    calculator.add(num);
    display.text(0);
    lastOperation = 'divide';
  }

  function multiply() {
    var disText = display.text();
    var num = parseFloat(disText);
    calculator.add(num);
    display.text(0);
    lastOperation = 'multiply';
  }

  function subtract() {
    var disText = display.text();
    var num = parseFloat(disText);
    calculator.add(num);
    display.text(0);
    lastOperation = 'subtract';
  }

  function equal() {
    var disText = display.text();
    var num = parseFloat(disText);
    if (lastOperation === 'multiply') {
      calculator.multiply(num);
    } else if (lastOperation === 'add') {
      calculator.add(num);
    } else if (lastOperation === 'subtract') {
      calculator.subtract(num);
    } else if (lastOperation === 'divide') {
      calculator.divide(num);
    } else if (lastOperation === 'memAdd') {
      calculator.memAdd(num);
    } else if (lastOperation === 'memSub') {
      calculator.memSub(num);
    }
    var result = calculator.result();
    var memDisplay = calculator.memDisplay();
    if (lastOperation === 'multiply' || 'add' || 'subtract' || 'divide' ){
      display.text(result);
    } else if (lastOperation === ['memAdd' || 'memSub'] ) {
      display.text(memDisplay);
    }
    console.log(result, memDisplay);
    calculator.reset();
  }

  function add() {
    var disText = display.text();
    var num = parseFloat(disText);
    calculator.add(num);
    display.text(0);
    lastOperation = 'add';
  }

  function clear() {
    calculator.reset();
    display.text(0);
    lastOperation = 'clear';
  }

  function memAdd() {
    var memNew = calculator.memory += parseFloat(display.text());
    display.text(0);
    console.log(calculator.memory);
    lastOperation = 'memAdd';
  }

  function memSub() {
    var disText = display.text();
    var memNew = calculator.memory -= parseFloat(disText);
    display.text(0);
    console.log(calculator.memory);
    lastOperation = 'memSub';
  }

  function memClear() {
    calculator.memClear();
    display.text(0);
    lastOperation = 'memClear';
  }

  function memDisplay() {
    var memDisplay = calculator.memDisplay();
    display.text(memDisplay);
    lastOperation = 'memDisplay';
  }

});
