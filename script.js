
$('.burger').click(function(){
  
  if($('.navbar').hasClass('showBar')){
    $('.menu').each(function(){ $(this).slideUp(300); });  
    $(this).removeClass('cross');
    $('.navbar').removeClass('showBar');  
  }else{
    $(this).addClass('cross');
    $('.navbar').addClass('showBar');
  }
});

function showUp() {

    // nav lifted and extended
    if (window.scrollY > 300) {$('nav').addClass('lift');}
    if (window.scrollY < 100) {$('nav').removeClass('lift');}

    if (window.scrollY > 300) {$('.nav-line').addClass('extend');}
    if (window.scrollY < 100) {$('.nav-line').removeClass('extend');}
    
    if (window.scrollY > 700) {$('.container').addClass('black');}else{
      $('.container').removeClass('black');
    }
    
    // elements show up on scroll
    function show() {
        var showAt = window.scrollY + window.innerHeight;
        var isShown = showAt > $(this).offset().top;

        if (isShown) { $(this).addClass('show'); }
        if (window.scrollY === 0) { $(this).removeClass('show'); }
    }
    $('h2,h3,p,section a,.arrow').each(show);
}

$(window).scroll(showUp);

function scrollTo(e){
  e.preventDefault();
  // $('.coralLine').removeClass('coralLine');
  // $(this).siblings('.underline').addClass('coralLine');
  
  var linkText = $(this).text();
  var sectionPos = $('section[id='+ linkText +']').offset().top-130;
  
  $('html').animate({scrollTop:sectionPos});
}

$('.link a').click(scrollTo);

$('nav .fa').click(function(){
  $('html').animate({scrollTop:20});
});

