
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


//Business Logic
var beepBoop = function (num) {
  let numbers = [];
  for (let i = 0; i <= num; i++) {
    numbers.push(i);
  }
  return numbers;
};


//User Interface Logic
$(document).ready(function () {
  //Submit Form
  $("form#submitNum").submit(function (event) {
    event.preventDefault();
    let number = parseInt($("input#num").val());
    $("#outputResult").text(beepBoop(number));
    $("#outputResult").fadeIn();
  })
})