$(document).ready(function(){
	pint.forEach(function(el){
	console.log(el);
	var id= el.id;
	var img= $('<img>', {'src':'..img/'+ id +'.jpg'});
	$("#contenedor").append("<div id='pinterest'>"+ '<h2>'+ el.title +'</h2>'+ 
		'<h2>'+ el.user +'</h2>'+ '<h2>'+ el.description +'</h2>'+'<h2>'+ el.hashtag 
		+'</h2>'+"<img src='img/" + id + ".jpg' ><div>");		
				});
})