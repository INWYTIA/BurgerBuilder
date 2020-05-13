$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "POST"
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".newBurger").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#myBurg").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });
});
