$(document).ready(function(){
  var segments = []
  $("#target").click(function() {
    // var last_segment = segments[segments.length - 1];
    // var last_time = last_segment.end
    // //var new_segment = {start: , end: }
    
    // $("#segments").append('<div class="module_holder"><p>Start :'+0+'</p><p>End : '+$("#current_time").text()+'</p></div>');
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
        
      }
    });
  });
});