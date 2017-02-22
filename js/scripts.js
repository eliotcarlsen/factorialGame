var factorial = function(number) {
  if (number <= 0) { // terminal case
    return 1;
  } else { // block to execute
    console.log(number);
    return (number * factorial(number - 1));
  }
};

$(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var userNumber = parseInt($("#number").val());

    console.log(factorial(userNumber));

    // if (number === 0){
    //   number += 1;
    // }else{
    //   for(var i = number - 1; i > 0; i --){
    //     number *= i;
    //     console.log(number);
    //   };
    // };
  });
});
