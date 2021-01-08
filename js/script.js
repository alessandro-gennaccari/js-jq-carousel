$(document).ready(function(){

  $('div.next i').click(goNext);
  $('div.prev i').click(goPrev);
  $('div.nav i').click(circleNav);

  $(document).keydown(function(e){
    switch(e.which){
      // Quando si utilizza ArrowLeft
      case 37:	goPrev();
      break;	
      // Quando si utilizza ArrowRight
      case 39:	goNext();
      break;
    }
  });

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

    if ($('div.nav i').eq(0).hasClass('active')){
      $('div.images img.active').removeClass('active');
      $('div.images img').eq(0).addClass('active');
    }
    else if ($('div.nav i').eq(1).hasClass('active')){
      $('div.images img.active').removeClass('active');
      $('div.images img').eq(1).addClass('active');
    }
    else if ($('div.nav i').eq(2).hasClass('active')){
      $('div.images img.active').removeClass('active');
      $('div.images img').eq(2).addClass('active');
    }
    else if ($('div.nav i').eq(3).hasClass('active')){
      $('div.images img.active').removeClass('active');
      $('div.images img').eq(3).addClass('active');
    }

}