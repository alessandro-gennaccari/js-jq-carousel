$(document).ready(function(){

  $('div.next i').click(goNext);
  $('div.prev i').click(goPrev);
  $('div.nav i').click(circleNav);
  $(document).keydown(arrowKey);

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

function circleNav() {

    $('div.nav i.active').removeClass('active');
    $(this).addClass('active');

    var index = $(this).index()

    if ($('div.nav i').eq(index).hasClass('active')){
      $('div.images img.active').removeClass('active');
      $('div.images img').eq(index).addClass('active');
    }

}

function arrowKey(e){
  switch(e.which){
    // Quando si utilizza ArrowLeft
    case 37:  goPrev();
    break;	
    // Quando si utilizza ArrowRight
    case 39:	goNext();
    break;
  }
}