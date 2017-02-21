$(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var number = parseInt($("#number").val());
    console.log(number);

    if (number === 0){
      number += 1;
      console.log(number);
    }else{

      for(var i = number - 1; i > 0; i -= 1){
        console.log(number);
        number *= i;
      };
      console.log(number);
    };
  });
});
