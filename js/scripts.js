
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
  let nums = [];
  var Dave = ("I'm sorry, Dave. I'm afraid I can't do that.");
  var zero = ("[beep]");
  var one = ("[boop]");

  if (num === 0) {
    return zero;
  } else if (num % 3 === 0) {
    $("#robot").fadeIn();
    return Dave;
  } else {
  for (i = 0; i <= num; i++) {
    if (i.toString().includes("0")) {
      nums.push(zero);
    } else if (i.toString().includes("1")) {
      nums.push(one); 
    } else {
    nums.push(i);
    }
  }
  return nums;
  }
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