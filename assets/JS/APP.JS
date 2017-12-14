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
 * Generación de código aleatorio
 */
$('#button-modalnext').click(function() {
  var code = "";
  var str = "123456789";
  for (var i = 0; i < 3; i++) {
    code += str.charAt(Math.floor(Math.random() * str.length));
  }
  $('#cuerpo').text('Your code: LAB-' + code);
});




$('#resend').click(function() {
  var codes = "";
  var str = "123456789";
  for (var i = 0; i < 3; i++) {
    codes += str.charAt(Math.floor(Math.random() * str.length));
  }
  $('#cuerpo').text('Your code: LAB-' + codes);
});

/**
 * Validación de números
 */

$('input[type="tel"]').numeric();

$('input[type="text"]').numeric();

$(document).ready(function(){
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

