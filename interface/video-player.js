$(document).ready(function(){
  $("#slider").hide();
  $(":button").hide();
  $("#format-alert").hide();
  $("#result-message").hide();
  setupDropZone();
  
  var URL = window.URL || window.webkitURL;
  var inputNode = document.querySelector('input');
  playSelectedFile = function() { playSelectedFileInit(event.target.files[0]) };
  inputNode.addEventListener('change', playSelectedFile, false);
  
  $("#video-active").on(
    "loadedmetadata", 
    function(event){
      $("#slider").show();
      $(":button").show();
      displaySlider(this.duration);
  });
});


function playSelectedFileInit(file) {
  $("#result-message").hide();
  $("#fileName").val(file.name);
  var type = file.type;
  var videoNode = document.querySelector('video');
  var canPlay = videoNode.canPlayType(type);
  canPlay = (canPlay === '' ? 'no' : canPlay);
  var message = 'Can play type "' + type + '": ' + canPlay;
  var isError = canPlay === 'no';

  var alert = $("#format-alert");
  if (isError) {
    alert.show();
    return;
  }
  else {
    alert.hide()
  }

  var fileURL = URL.createObjectURL(file);
  videoNode.src = fileURL;
}


function setupDropZone() {
  var dropZone = $("#drop-zone")[0];
  
  dropZone.ondrop = function(event) {
    event.preventDefault();
    this.className = 'upload-drop-zone';
    playSelectedFileInit(event.dataTransfer.files[0]);
  }
  
  dropZone.ondragover = function() {
      this.className = 'upload-drop-zone drop';
      return false;
  }

  dropZone.ondragleave = function() {
      this.className = 'upload-drop-zone';
      return false;
  }
}
