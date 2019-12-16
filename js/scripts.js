
//Checks if user input is a number. returns an alert if not.
//Removed for now.

// var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "g", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// function letterCheck(num) {
//   if (alpha.includes(num.charAt(0, -1))) {
//     alert("enter a number");
//     Default();
//   } else {
//     return BeepBoop(num);
//   }
// }



//This function just doesn't work!!!!!
//should at least output a range of numbers from 0 to the user input.
function BeepBoop(num) {
  var Dave = ("I'm sorry, Dave. I'm afraid I can't do that.")
  var zero = ("beep");

  console.log(num);

  for (var i = 0; i < num; i++) {
    console.log(i);
    if (i = 0) {
      return zero;
    } else if (i % 3 === 0) {
      $("#robot").fadeIn();
      return Dave;
    } else {
      return i;
    }
  }
}



$(document).ready(function () {
  $("form#submitNum").submit(function (event) {
    event.preventDefault();

    var userInput = parseInt($("input#num").val());
    console.log(userInput);

    $("#outputResult").append(" " + BeepBoop(userInput));

  });
});
