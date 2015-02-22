$(document).ready(function(){
  $("#target").click(function() {
    var start = $("#slider-range").slider("values", 0);
    var end = $("#slider-range").slider("values", 1);
    
    var data = {  "inputFilePath" : $("#fileName").val(),
                  "outputFilePath" : "output",
                  "begin" : $("#slider-range").slider("values", 0),
                  "end" : $("#slider-range").slider("values", 1) }
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:1337",
      processData: false,
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function(r) {
        $("#result-message").removeClass('alert-danger');
        $("#result-message").addClass('alert-success');
        $("#result-message").html("<strong>Done!</strong> The video has been splitted, look in the 'videos' folder.");
        $("#result-message").show();
      },
      error: function (xhr, ajaxOptions, thrownError) {
        $("#result-message").removeClass('alert-success');
        $("#result-message").addClass('alert-danger');
        $("#result-message").html("<strong>Error!</strong> "+xhr.responseText);
        $("#result-message").show();
      }
    });
  });
});