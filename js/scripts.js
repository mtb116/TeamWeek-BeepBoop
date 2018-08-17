// Back end
var ifZero = ["0"];
var ifOne = ["1"];
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "g", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//Checks if entered value is a number
function letterCheck(array) {
  if (alpha.includes(array.charAt(0,-1))) {
    alert("enter a number");
    Default();
  } else {
    console.log(array);
    return numThreeCheck(array);
  }
}

function numThreeCheck(array) {
  var Dave = ("I can't do that, Dave")
  var zero = ("beep");

  if (ifZero.includes(array.charAt(0))) {
    return zero;
  } else if (array%3 === 0) {
      $("#robot").fadeIn();
      return Dave;
  } else {
      return beep(array);
  }
}


function beep(array) {
  var zero = ("beep");
  var array;
  var checkZero = array.split("");

  console.log("array length is " + array.length);
  console.log(checkZero);

  for (i = 0; i < array.length; i++) {
    if (checkZero[i].indexOf("0")) {
      return zero;
    } else {
      return array;
    }
  }
}

// User Interface
$(document).ready(function(){
  $("form#submitNum").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#num").val();
    console.log("Entered value is " + userInput);

    var userInputArr = userInput.split(" ");
    console.log("Array is now " + userInputArr);

    userInputArr.forEach(function(checkletters) {
      $("#outputResult").append(" " + letterCheck(checkletters));
    });
  });
});
