$(document).ready(function(){
  var cards = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
  
  cards.forEach(function(card){
    $("div#"+card+"-show").click(function () {
      $("div#" + card + "-show").toggle();
      $("div#" + card + "-hide").toggle();
    });
    $("div#" + card + "-hide").click(function () {
      $("div#" + card + "-hide").toggle();
      $("div#" + card + "-show").toggle();
    });
  });
});