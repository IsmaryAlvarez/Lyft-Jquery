var codevar='';
/**
 * Función centrado de imagen en vista splash
 */

$.fn.center = function () {
  this.css("position","absolute");
  this.css("top", Math.max(0, (
    ($(window).height() - $(this).outerHeight()) / 2) + 
  $(window).scrollTop()) + "px"
  );
  this.css("left", Math.max(0, (
    ($(window).width() - $(this).outerWidth()) / 2) + 
  $(window).scrollLeft()) + "px"
  );
  return this;
}

/**
 * cargado de función vista splash
 */
$("#overlay").show();
$("#overlay-content").show().center();

setTimeout(function(){    
  $("#overlay").fadeOut();
}, 2000);

/**
 * Función circulo vista splash
 */
$('#circle').circleProgress({
 value: 1,
 fill: {gradient: [['#0681c4', .5], ['#4ac5f8', .5]], gradientAngle: Math.PI / 4}

}).on('circle-animation-progress', function(event, progress, stepValue) {
  $(this).find('strong').text(stepValue.toFixed(2).substr(1));
  
});

/**
 * Validación de telefonos con banderas
 */
$("#phone").intlTelInput();

$(document).ready(function() {
 $('#button-modalnext').prop('disabled', true);
 $('input[type="tel"]').keyup(function() {
  if($(this).val().length === 10) {
   $('#button-modalnext').prop('disabled', false)
 }
 if($(this).val().length > 10) {
   $('#button-modalnext').prop('disabled', true);
   alert('Ingrese un teléfono válido de 10 dígitos');
 }
})});

/**
 * Comparación de inputs
 */
$('#codegeneration').keyup(function(){
  if($(this).val() == codevar){
    $('#hola').removeClass('disabled');
  }
})
/**
 * Validación del formulario
 */
$('#uLogin').keyup(function(){
  if($(this).val() == codevar){
    $('#hola').removeClass('disabled');
  }
})


/**
 * Generación de código aleatorio
 */
$('#button-modalnext').click(function() {
  var str = "123456789";
  for (var i = 0; i < 3; i++) {
    codevar += str.charAt(Math.floor(Math.random() * str.length));
  }
  $('#cuerpo').text('Your code: LAB-' + codevar);
  codevar='';
});



$('#resend').click(function() {
  $('#secondmodal').css('display', 'none');
  $('#phone').val('')
});



/**
 * Validación de números
 */

$('input[type="tel"]').numeric();



$(document).ready(function(){
  $('#hola').addClass('disabled');
  $('#final').addClass('disabled');
  $('.modal-footer button').click(function(){
    var button = $(this);

    if ( button.attr("data-dismiss") != "modal" ){
      var inputs = $('form input');
      var title = $('.modal-title');
      var progress = $('.progress');
      var progressBar = $('.progress-bar');

      inputs.attr("disabled", "disabled");

      button.hide();

      progress.show();

      progressBar.animate({width : "100%"}, 100);

      progress.delay(1000)
      .fadeOut(600);

      button.text("Close")
      .removeClass("btn-primary")
      .addClass("btn-success")
      .blur()
      .delay(1600)
      .fadeIn(function(){
        title.text("Log in is successful");
        button.attr("data-dismiss", "modal");
      });
    }
  });

  $('#myModal').on('hidden.bs.modal', function (e) {
    var inputs = $('form input');
    var title = $('.modal-title');
    var progressBar = $('.progress-bar');
    var button = $('.modal-footer button');

    inputs.removeAttr("disabled");

    title.text("Log in");

    progressBar.css({ "width" : "0%" });

    button.removeClass("btn-success")
    .addClass("btn-primary")
    .text("Ok")
    .removeAttr("data-dismiss");

  });
});


$('#final').click(function(){
  $('#ok').css('display', 'block');
  $('.botones').css('display', 'none');
  $('.modal fade').css('display', 'none');
  $('#myModal2').css('display', 'none');
  
})