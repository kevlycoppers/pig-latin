// BACK END //


var consonantArray = []
var vowelArray = ["a", "e", "i", "o", "u"]


var pigLatin = function(sentence) {
  if (sentence[0] === "a" || sentence[0] === "e" || sentence[0] === "i" || sentence[0] === "o" || sentence[0] === "u") {
    var addAy = sentence + "ay";
    return addAy;
  } else {
    // var char = sentence.split();
    return sentence.slice(1) + sentence.charAt(0) + "ay"
  }
}




// USER INTERFACE LOGIC //
$(function() {
  $("form#piglatin").submit(function(event) {
    event.preventDefault();

    var sentence = $("#english").val();

    $("#results").text(pigLatin(sentence));
  });
});
