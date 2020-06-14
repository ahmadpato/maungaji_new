var url = "http://13.59.145.203:8000/v1/landing";

$.get(url, function(res){
	  
	let data = res.data

	$.each(data, function( key, value ) {

	document.getElementById("meet").innerHTML	= value.name;

	document.getElementById("count").innerHTML  = value.count;	

	});
});