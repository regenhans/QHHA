//usando la convencion de nombrar imagenes terminando con -0 para inactivo y -1 para activo cambia el nombre al hacer mouseover o mouseout

//funcion para cambiar un caracter de cualquier string
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}
//modo activo onMouseOver
function activeImage(image){
    var imageName = image.getAttribute("src");
    var indexOf = imageName.indexOf('0');
    var newName = imageName.replaceAt(indexOf, "1")
    image.setAttribute("src", newName);
}
//modo inactivo onMouseOut
function normalImage(image){
    var imageName = image.getAttribute("src");
    var indexOf = imageName.indexOf('1');
    var newName = imageName.replaceAt(indexOf, "0")
    image.setAttribute("src", newName);
}

//tooggle on click
function toggle(element){
    $(element).toggle();
}

//sticky header functions


$(window).scroll(function(){
  if($(document).scrollTop() > 50){
      $('.header').removeClass('static');
      $('.main-container').css('padding-top','115px');
      $('.header').addClass('fixed');
  }
  if($(document).scrollTop() < 50){
      $('.header').removeClass('fixed');
      $('.main-container').css('padding-top','0');
      $('.header').addClass('static');
  }
});
