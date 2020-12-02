$(document).ready(function(){
	$("#proj1card").load("proj1.html");
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



