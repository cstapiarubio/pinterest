/*inicio fx jquery*/
$(document).ready(function(){
	/*recorro con forEach mi var pint (json con info de pinterest)*/
	pint.forEach(function(el){
		/*muestra en consola el arreglo. Es para corroborar lo que estoy haciendo*/
		console.log(el);
		/*obtengo el id de cada publicación desde json y lo guardo en una variable*/
		var id= el.id;
		/*creamos nuestra variable imagen: la img la inserto en una etiqueta IMG y copio su ruta, en este caso carpeta img/foto.jpg;
		luego la llamo traves del id y le añado la extension jpg en este caso*/
		var img = '<img src="img/' + id + '.jpg">';
		/*creamos un div que contiene la info del json que queremos*/
		var caja = $('<div/>');
	/*info que quiero la llamo (en este caso) con el.loquequiero; ejem el.title; el.user etc
	y la añado con un append a mi div que esta señalado en la var caja para que contenido sea unico. 
	La info que quiero la guardo dentro de div, h1, img según sea el caso*/
	caja.append("<li class='pinterest'>"+ img + '<h2>'+ el.title +'</h2>'+ 
		'<p>'+ el.description +'</p>'+ '<p>'+ el.user +'</p>'+
		'<p>'+ '<br/>' + '#'+ el.hashtag +'</p>' + "<li>");
/*La info que está guarda en var caja la guardamos ahora en el contenedor vacío que está en html*/
		$('#contenedor').append(caja);

		caja.click(function(){
	    var cont= $('<div/>', {'class': 'modal-content'});
		var title= $('<h4/>', {"text": el.title});
		var imgMod=$('<img/>', {'src': 'img/' + id + '.jpg', 'class': 'img-content'});
		var user=$('<p/>', {"text": el.user});
		var hash=$('<p/>', {"text": el.hashtag});
		var title= $('<p/>', {"text": el.description});
		var close = $('<i/>', {"class":'fa fa-times close'});
		var iconUpload = $('<i/>', {"class":'fa fa-upload'});
		var iconCheck = $('<i/>', {"class":'fa fa-check'});
		var iconPtos =$('<i/>', {"class":'fa fa-ellipsis-h'});
		var iconGuardar = $('<i/>', {"class":'fa fa-thumb-tack'});
		var botonGuardar=$('<button/>',{"text": 'Guardar'});
		var botonLeer=$('<button/>', {"text": 'Leerlo'});
		cont.append(iconUpload);
		cont.append(iconCheck);
		cont.append(iconPtos);
		botonGuardar.append(iconGuardar);
		cont.append(botonGuardar);
		cont.append(close);
		cont.append(title);
		cont.append(imgMod);
		cont.append(user);
		cont.append(hash);
		cont.append(botonLeer);
		$('#mod').append(cont);
		$('#mod').show();
		close.click(function(){
			$('.modal-content').hide();
			$('#mod').hide();
		})
	})
})

});

/*MODAL*/


