
$(document).ready(function() {
  $('input:radio').change(function() {});
  $("button").click(function() {
    if ($("input[type=text").val().length === 0){
      alert("Fill the blank");
    }
      var text = $("input[type=text]").val();
      var value = $("input[type='radio']:checked").val();
      $("ol").append(value + "<p>" + text + "</p>" + "<button id='deleter' class='btn btn-danger md-1'>X</button>"+ "<hr>" );
    });
  });



$(document).on("click", "#deleter", function(){
  $("ol").remove();
})
