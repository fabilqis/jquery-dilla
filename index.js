
$(document).ready(function() {
  $('input:radio').change(function() {});
  $("button").click(function() {
    var text = $("input[type=text]").val();
    var value = $("input[type='radio']:checked").val();
    if ($("input[type=text").val().length === 0){
      alert("Fill the blank");
    }
      $("#add").append("<li>"+ value + "<p>" + text  + "</p>" + "<button id='deleter' class='btn btn-danger md-1'>X</button><hr></li>" );
      $("input[type=text").val("")
    });
  });



$(document).on("click", "li", function(){
  $(this).remove()
});
