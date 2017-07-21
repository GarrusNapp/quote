$(document).ready(function() {

  var showText = function (message, index, interval) {
    if (index < message.length) {
      $("#msg").append(message[index++]);
      setTimeout(function () { showText(message, index, interval); }, interval);
    }
  }

  $.getJSON('https://cors-anywhere.herokuapp.com/http://quotes.stormconsultancy.co.uk/random.json', function(json) {
    glob = json.quote;
    author = json.author;
  });

  $("#getMessage").on("click", function(){
      $("#msg").html("");
      $("#Tweet").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(glob) + "- " + author);
      showText(glob + "- " + author + " ", 0, 1);
      $.getJSON('https://cors-anywhere.herokuapp.com/http://quotes.stormconsultancy.co.uk/random.json', function(json) {
        glob = json.quote;
        author = json.author;
      });
   });

   (function blink() {
       $('.blink_me').fadeOut(1000).fadeIn(3000, blink);
   })();

});
