$(document).ready ( function() {
  initPage();
});

function initPage() {
  
	// draw the curtain
	$("#fader").effect("fade", null, 500, hideFader);
	
}

function hideFader(){
    $("#fader").remove();
}