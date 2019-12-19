
//Business Logic

function alphanumeric(number) {
  var letters = /^[a-z]+$/;
  if (number.match(letters)) {
    alert('Please input alphanumeric characters only');
  } else {
    return beepBoop(parseInt(number));
  }
}

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
    let number = $("input#num").val();
    $("#outputResult").text(alphanumeric(number));
    $("#outputResult").fadeIn();
  })
})