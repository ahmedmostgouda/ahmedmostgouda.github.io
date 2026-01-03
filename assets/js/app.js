$(document).ready(function(){
	setBindings();
});

function setBindings(){
	$( document.getElementsByClassName("contactlink")).click(function(e){
		e.preventDefault();
        var sectionID = "footer";
		$("html, body").animate({scrollTop : $("#" + sectionID).offset().top},	1000);
		return false;
	})
}



