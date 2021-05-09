$(document).ready(function(){
	$("#covid_detection_post").load("projectsposts/covid_detection_post.html");
	$("#lung_segmentation_post").load("projectsposts/lung_segmentation_post.html");

	$("#brainDL_sem3_post").load("projectsposts/brainDL_sem3_post.html");
	$("#atlas_sem3_post").load("projectsposts/atlas_sem3_post.html");
	$("#histo_sem3_post").load("projectsposts/histo_sem3_post.html");
	$("#dermo_sem3_post").load("projectsposts/dermo_sem3_post.html");
	$("#chest_sem3_post").load("projectsposts/chest_sem3_post.html");
	$("#brats_sem2_post").load("projectsposts/brats_sem2_post.html");

	$("#mammo_sem2_post").load("projectsposts/mammo_sem2_post.html");
	$("#fuzzy_sem2_post").load("projectsposts/fuzzy_sem2_post.html");
	$("#ehealth_sem2_post").load("projectsposts/ehealth_sem2_post.html");
	$("#heart_sem1_post").load("projectsposts/heart_sem1_post.html");
	$("#harris_sem1_post").load("projectsposts/harris_sem1_post.html");
	$("#cocacola_sem1_post").load("projectsposts/cocacola_sem1_post.html");

	$("#GPStracking_self_post").load("projectsposts/GPStracking_self_post.html");
	$("#osc_self_post").load("projectsposts/osc_self_post.html");

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



