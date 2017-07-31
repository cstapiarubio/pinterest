/*inicio fx jquery*/
$(document).ready(function(){
	/*recorro con forEach mi var pint (json con info de pinterest)*/
	pint.forEach(function(el){
		/*muestra en consola el arreglo. Es para corroborar lo que estoy haciendo*/
		console.log(el);
		/*obtengo el id de cada publicación desde json y lo guardo en una variable*/
		var id= el.id;
		/*var img= $('<img>', {'src':'..img/'+ id +'.jpg'});*/

	/*info que quiero la llamo (en este caso) con el.loquequiero; ejem el.title; el.user etc
	y la añado con un append a mi div contenedor que esta señalado en el html. 
	La info que quiero la guardo dentro de div, h1, img según sea el caso*/

	/*la img la inserto en una etiqueta IMG y copio su ruta, en este caso carpeta img/foto.jpg;
		luego la llamo traves del id y le añado la extension jpg en este caso*/
	$("#contenedor").append("<li class='pinterest'>"+ "<img src='img/" + id + ".jpg' >" + 
 '<h4>'+ el.title +'</h4>'+ '<p>'+ el.description +'</p>'+ '<p>'+ el.user +'</p>'+
		'<p>'+ '#'+ el.hashtag +'</p>' + "<li>");		
});
})

