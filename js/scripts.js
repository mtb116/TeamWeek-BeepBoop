// Back end


var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "g", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//Checks if entered value is a number
function letterCheck(array) {
  if (alpha.includes(array.charAt(0,-1))) {
    alert("enter a number");
    Default();
  } else {
    console.log(array);
    numThreeCheck(array);
  }
}

function numThreeCheck(array) {
  console.log(array);
  if (array%3 === 0) {
    alert("I can't do that");
  }
}


// User Interface
$(document).ready(function(){
  $("form#submitNum").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#num").val();
    console.log(userInput);

    var userInputArr = userInput.split(" ");
    console.log(userInputArr);

    userInputArr.forEach(function(checkletters) {
      $("#outputResult").append(" " + letterCheck(checkletters));
    });
  });
});
