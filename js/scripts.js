// BACK END //

var consonantArray = []
var vowelArray = ["a", "e", "i", "o", "u"]


var pigLatin = function(word) {
  if (word[0] === "a" || word[0] === "e" || word[0] === "i" || word[0] === "o" || word[0] === "u") {
    var addAy = word + "ay";
    return addAy;
  } else {
    while (word.charAt(0) !== "a" && word.charAt(0) !== "e" && word.charAt(0) !== "i" && word.charAt(0) !== "o" && word.charAt(0) !== "u") {
      if (word.charAt(0) === "q") {
        return word.slice(2) + word.charAt(0) + word.charAt(1) + "ay"
      } else {
        var consonant = word.substr(0,1)
        return word.slice(1,word.length).concat(consonant)
      }
    }
  }
};

// USER INTERFACE LOGIC //
$(function() {
  $("form#piglatin").submit(function(event) {
    event.preventDefault();

    var word = $("#english").val();

    $("#results").text(pigLatin(word));
  });
});
