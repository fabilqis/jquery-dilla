$(document).ready(function () {
  $('input:radio').change(function () {});
  $("button").click(function () {
    var value = $("input[type='radio']:checked").val();
    if ($("input[type='text']").val().length === 0) {
      alert("Fill the blank");
    } else {
      var text = $("input[type='text']").val();
      $("#add").append("<div class='todo-list'>" + "<li>" + value +
        "&nbsp;" + "&nbsp;" + text +  "<button type='button' id='deleter' class='btn btn-danger btn-xs'>X</button>"+ "</li>" + "</div>" );
      $("input[type='text']").val('');
    } 
  });
});


$(document).on("click", "#deleter", function () {
  $(this).parent().hide();
});