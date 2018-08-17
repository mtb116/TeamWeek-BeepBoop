$(document).ready(function(){
  $("form#submitNum").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#num").val());
    console.log(userInput);

  });
});
