$(document).ready(function(){
  $("form#submitNum").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#num").val();
    console.log(userInput);
    var split = userInput.split(" ");
    console.log(split);

  });
});
