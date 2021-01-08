$(document).ready(function(){

  $('div.next i').click(goNext);
  $('div.prev i').click(goPrev);

});

function goNext() {

  var imgActive = $('div.images img.active');
  var circleActive = $('div.nav i.active')

  imgActive.removeClass('active');
  imgActive.next().addClass('active');

  circleActive.removeClass('active');
  circleActive.next().addClass('active');

  if (imgActive.hasClass('last')){
    $('div.images img.first').addClass('active');
    $('div.nav i.first').addClass('active');
  }

}

function goPrev() {

  var imgActive = $('div.images img.active');
  var circleActive = $('div.nav i.active')

  imgActive.removeClass('active');
  imgActive.prev().addClass('active');

  circleActive.removeClass('active');
  circleActive.prev().addClass('active');

  if (imgActive.hasClass('first')){
    $('div.images img.last').addClass('active');
    $('div.nav i.last').addClass('active');
  }

}