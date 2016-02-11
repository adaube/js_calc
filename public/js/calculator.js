// Scripting for app.js function
var Calculator = {
  current: 0,
  memory: 0,
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  result: result,
  reset: reset,
  memAdd: memAdd,
  memSub: memSub,
  memClear: memClear,
  memDisplay: memDisplay,
}

function add(num){
  this.current += num;
}

function subtract(num){
  this.current -= num;
}

function multiply(num){
  this.current *= num;
}

function divide(num){
  this.current /= num;
}

function result(){
  return this.current;
}

function reset(num){
  this.current = 0;
}

function memAdd(num){
  this.memory += num;
}

function memSub(num){
  this.memory -= num;
}

function memClear(){
  this.memory = 0;
}

function memDisplay(){
  return this.memory;
}

// Scripting for the CSS style courtesy of https://css-tricks.com/snippets/css/picross-style-buttons/

$(".btn").hover(function(){
	$(this).stop().animate({
		top: "1",
		left: "1"
	}, 100 );
},
function(){
	$(this).stop().animate({
		top: 0,
		left: 0
	}, 100 );
});

// Scripting for image loading
//
// var image = document.images[0];
// var downloadingImage = new Image();
// downloadingImage.onload = function(){
//     image.src = this.src;
// };
// downloadingImage.src = "../images/The-Lego-Movie.jpg";
