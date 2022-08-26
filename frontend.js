var baseDoc_url = 'http://localhost/VETERINARIAPROYECTO/index.php/api/login/';
function inicio()
{
	//alert("holaa");
	var enlace = baseDoc_url + "getMensajes";
	$.ajax({
		type:"GET",
		url: enlace,
		success: function(data)
		{			
			$("#cuerpo").html("");
			var con = 0;
			for(var i=0; i<data.content.length; i++)
			{
				con = i + 1;
			var tr = `<tr>
			  <td>`+con+`</td>
			  <td>`+data.content[i].id+`</td>
			  <td>`+data.content[i].message+`</td>
			  <td>`+data.content[i].state+`</td>
			  <td>`+data.content[i].fecha_registro+`</td>
			  <td>`+data.content[i].fecha_recepcion	+`</td>
			</tr>`;
			$("#cuerpo").append(tr)
			}
			
		}
	});
}

function guardarDatos()
{

	var datoenviar = $('#txtvalora').val();;
	var enlace = baseDoc_url + "mensajeGuardar";    
    $.ajax({
        type: "POST",
        url: enlace,
        data: {message:datoenviar},
        success: function (data) 
       	{            
            inicio();
        }
    });

}