$(document).ready(function(){
var temp = ""
var demora = 0;
var inspeccion = 0;
var operacion = 0;
var actividadcomplementaria = 0;
var almacen = 0;
var transporte = 0;
  $("#operacion,#inspeccion,#actividadcomplementaria,#transporte,#almacen,#demora,#lineasv,#linealv,#lineash,#lineah").click(function(){
    let id = this.id;
    console.log(id);
    if(id == "demora"){
      demora++;
    }
    else if(id == "inspeccion"){
      inspeccion++;
    }
    else if(id == "operacion"){
      operacion++;
    }
    else if(id == "actividadcomplementaria"){
      actividadcomplementaria++;
    }
    else if(id == "almacen"){
      almacen++;
    }
    else if(id == "transporte"){
      transporte++;
    }
    actualizar();
    var fila=$('<div class="drags" id="'+id+'"></div>');
    var linea=$('<div class="drags" id="lineasv"></div>');
    fila.draggable();
    linea.draggable();
    temp = "listo"
    if(n == 0){
      $('.dibujarprimero').append(fila);
      if(id !== 'lineasv' && id !== 'linealv' && id !== 'lineash' && id !== 'lineah'){
        $('.dibujarprimero').append(linea);
      }
    }
    else{
      $('.dibujasiguiente:last').append(fila);
      if(id !== 'lineasv' && id !== 'linealv' && id !== 'lineash' && id !== 'lineah'){
          $('.dibujasiguiente:last').append(linea);
        }
    }
  });

  $('#bote').droppable({
    tolerance: 'touch',
    drop: botedebasura
  });

    function botedebasura(ev, ui) {
        var draggable = ui.draggable;
        var simbolo = ui.draggable.attr("id");
        if(simbolo == "demora"){
          demora--;
        }
        else if(simbolo == "inspeccion"){
          inspeccion--;
        }
        else if(simbolo == "operacion"){
          operacion--;
        }
        else if(simbolo == "actividadcomplementaria"){
          actividadcomplementaria--;
        }
        else if(simbolo == "archivo"){
          almacen--;
        }
        else if(simbolo == "transporte"){
          transporte--;
        }
        actualizar();

        if ($(draggable).hasClass("valordescripcion")) {
          var tecto = $(this).attr('.valordescripcion');
          var sep = ' ';
          var totali = tecto.split(sep);
          console.log(totali); 
        }
        else{
          console.log('ño');
        }
        $(draggable).remove();
      }
   
var sum=0;
var outputText = '';
var minu;
  $("#generar").click(function(){
    var d = $("input[name='descripcion']").val();
    var m = $("input[name='minutos']").val();
    var p = $("input[name='persona']").val();
    var blanco = "";
    var descripcion=$('<p class="valordescripcion">'+d+'<br><span class="valotes">'+m+'</span> min <br>'+p+'</p>');
    descripcion.draggable();
       
    $("input[name='minutos']").each(function() {
    sum += Number($(this).val());
    });
    minu = sum +" minutos";
    $('#mins').text(minu);

    $("input[name*='persona']").each(function() {
      var divHtml = $(this).val() + '\n';
      outputText += divHtml;
    });
    $("#personas").text(outputText);

    if(n == 0){
      $('.escribirprimero').append(descripcion);
    }else{
      $('.escribirsiguiente:last').append(descripcion);
    }
    $("input[name='descripcion']").val(blanco);
    $("input[name='minutos']").val(blanco);
    $("input[name='persona']").val(blanco);
  });


  var n = 0;
  var y = 0;
  $("#columna").click(function(){
    if(temp == "listo"){
    temp = "nolisto"
    var nuevaColumna = '<div class="dibujasiguiente"></div>';
    var nuevaColumnaEscribir = '<div class="escribirsiguiente"></div>';
    $('.flex-container').append(nuevaColumna);
    $('.flex-container').append(nuevaColumnaEscribir);
    $(".drags:last").remove();
    n=1;
    }
  });

  $("#more").click(function(){
    var bloque = '<div class="flex-container"></div>';
    $('.container').append(bloque);
    y = 1;
  });

  var i=0;
  $("#imprimir").click(function(){
    
    window.print();

  });

  $("#ok").click(function(){
    var h1 = $('h1').text();
    var t = $("input[name='nameotida']").val();
    var titulo =$('<p class="tituloficial">'+h1+' '+t+'</p>');
    $('.titulooficial').prepend(titulo);
    $('.tituloprovisional').hide();
    $('#editar').show();
  });

  $("#editar").click(function(){
    $('.tituloprovisional').show();
    $('.tituloficial').remove();
    $(this).hide();
  });

  function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

function actualizar(e){
    $("#oper").text(operacion);
    $("#inspe").text(inspeccion);
    $("#acti").text(actividadcomplementaria);
    $("#tran").text(transporte);
    $("#arch").text(almacen);
    $("#demo").text(demora);
    $("#ope,#insp,#act,#tra,#arc,#dem").hide();
    if(operacion > 0){
      $("#ope").show();
    }
    if(inspeccion > 0){
      $("#insp").show();
    }
    if(actividadcomplementaria > 0){
      $("#act").show();
    }
    if(transporte > 0){
      $("#tra").show();
    }
    if(almacen > 0){
      $("#arc").show();
    }
    if(demora > 0){
      $("#dem").show();
    }
}


function restar(e){
  /*var datos=$('.descripcion').val();
  var todos=datos.split("<br>");
  console.log(todos);
  for(var i=0;i<todos.length;i++){
    alert(todos[i]);
  }
}*/
var regex = /(\d+)/g;
var name2= $(this).find('.descripcion');
console.log(name2.match(regex)); 

}

});