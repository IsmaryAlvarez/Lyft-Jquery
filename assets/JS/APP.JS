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


$("#overlay").show();
$("#overlay-content").show().center();

setTimeout(function(){    
  $("#overlay").fadeOut();
}, 2000);



$("#phone").intlTelInput();

$(document).ready(function() {
     $('input[type="submit"]').prop('disabled', true);
     $('input[type="tel"]').keyup(function() {
        if($(this).val().length === 10) {
           $(':input[type="submit"]').prop('disabled', false)
 }
  if($(this).val().length > 10) {
           alert('Ingrese un teléfono válido de 10 dígitos')
 }
  })});

$('input[type="submit"]').click(function() {
  var code = "";
  var str = "123456789";
  for (var i = 0; i < 3; i++) {
    code += str.charAt(Math.floor(Math.random() * str.length));
  }
  $('#cuerpo').text('Tu código: LAB-' + code);
});

$('input[type="tel"]').numeric();


