'use strict';
require.config({
    paths: {
    	global: 'modules/global'
    }
});

require(['global'], function (global) {

	global.init();

	var projectType = urlParam('type');
	var url = 'json/present-project.json'
	var workTypeTitle = "Present Projects";
	var workTypeDesc = "The works described in this section are current Lead projects and recent appointments<br /><br /><span class=\"small\">All images are used licence or copyright Leadarchitects Limited</span>";
	if(projectType == 'past'){
		url = 'json/past-project.json'
		var workTypeTitle = "Past Projects";
		var workTypeDesc = "The works described in this section are projects of Benoy Limited where Lead team members played key roles<br /><br /><span class=\"small\">All images are used licence or copyright Leadarchitects Limited</span>";
	}
	$("#workTypeTitle").html(workTypeTitle);
	$("#workTypeDesc").html(workTypeDesc);
	$.ajax({
		url: url,
		type: 'get',
		success: function (data) {
			var html = ""; 
			var className = ['galleryLeft','galleryMiddle','galleryRight'];
			var template = Handlebars.compile($('#workListNode').html());
			var count = 0;
			for(var i=0; i<data.length; i++){
				if(count == 0)
					html += '<div class="galleryRow">'

				data[i].className = className[count];
				html += template(data[i]);

				count += 1;
				
				if(count == 3){
					html += '<div class="clearfix"></div></div>';
					count = 0;
				}
			}
			html += '<div class="clearfix"></div>';
			$('#workSubPage>.gallery').html(html);
		},
		error: function(err){
			console.log(err);
		}
	});

});