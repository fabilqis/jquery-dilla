

$(document).ready(function () {
  $('input:radio').change(function () {
  });
  $("button").click(function () {
      let text = $("input[type=text]").val();
      var value = $("input[type='radio']:checked").val();
      $("ol").append(value+"<p>"+text+"</p>");
    });
  });


$(document).on("dblclick", "li", function () {
  $(this).hide()
})