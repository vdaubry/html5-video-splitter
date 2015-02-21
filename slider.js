function displaySlider(duration) {
  var previousStart = 0;
  var previousEnd = duration;
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: duration,
    values: [ 0, duration ],
    slide: function( event, ui ) {
      if(previousStart != 0 && ui.values[0] != previousStart) {
        $("#video-active")[0].currentTime=ui.values[0];
      }
      if(previousEnd != duration && ui.values[1] != previousEnd) {
        $("#video-active")[0].currentTime=ui.values[1];
      }
      $( "#selected-video-time" ).val(ui.values[ 0 ] + "s - " + ui.values[ 1 ] + "s" );
      previousStart = ui.values[ 0 ];
      previousEnd = ui.values[ 1 ];
    }
  });
  
  $("#selected-video-time").val($("#slider-range").slider("values", 0) + "s" +
    " - " + $("#slider-range").slider("values", 1 ) + "s");
}