$(document).ready(function() {
  console.log('Setting up query form');
  $("#query-form").submit(function(event) {
    console.log('Running submit');
    $.post("http://localhost:3000", $(this).serialize(), function(play) {
       console.log('In post callback function - ', play);
       var html = "<div class='play'>";
       html += "<h3 class='title'>" + play.name + "</h3>";
       html += "Written: " + play.date;
       html += "<br>Category: " + play.category;
       html += "<br>Synopsis: " + play.synopsis;
       html += "</div>";
       $("#plays").append($(html));
     });
    event.preventDefault();
  });
});
