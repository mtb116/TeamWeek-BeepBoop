
//Checks if user input is a number. returns an alert if not.

function alphanumeric(txt)
{
var letters = /^[a-z]+$/;
if(txt.value.match(letters))
{
alert('Please input alphanumeric characters only');
//return false;
  //  Default();
  } else {
    return beepBoop(num);
}
}
//!!Verifies only numbers are used in the input field, but breaks the beepboop. consequently not getting any output.

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
