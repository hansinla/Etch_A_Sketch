var blockIdent, paintColor;
var numBlocks = 16;
var divWidth = Math.floor(window.innerWidth / numBlocks)-4;
var divWidth = Math.floor(window.innerHeight / numBlocks)-4;
if (divHeight < divWidth) {
	var divWidth = divHeight;
} else {
	var divHeight = divWidth;
}
var blocksHTML = "";

$(document).ready(function(){
	for (var j = 0; j < numBlocks; j++) {
		for (var i = 0; i < numBlocks; i++) {
			blockIdent = j*100 + i;
			blocksHTML += "<div id = '" + blockIdent + "' class = 'block' style='width:" + divWidth + "px; margin:1px; height:" + divHeight + "px;'></div>";
		}
		blocksHTML += "<div style='clear:both;'></div>";
	}
  document.getElementById("container").innerHTML = blocksHTML;
});


$(document).ready(function(){
	$('.block').hover(function() {
			paintColor = randomColor();
			$( this ).css( "background-color",  paintColor);
	});
});
