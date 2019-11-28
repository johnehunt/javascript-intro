$(document).ready(function() {
  $("#show").hover(
    function() {
      $(this).addClass("hover");
    },
    function() {
      $(this).removeClass("hover");
    }
  );
  $("#show").click(function() {
    console.log("running ckick on show");
    $.get("http://localhost:3000", function(plays) {
      $("#plays").empty();
      $.each(plays, function(i, plays) {
        var html = "<div class='play'>";
        plays.forEach(play => {
          console.log(play);
          html += "<h3 class='title'>" + play.name + "</h3>";
          html += "Written: " + play.date;
          html += "<br>Category: " + play.category;
          html += "<br>Synopsis: " + play.synopsis;
          html += "</div>";
        });
        $("#plays").append($(html));
      });
    });
  });
});
