console.log('main.js');
// Change navbar color on scroll

$(window).scroll(function(){
  $('.navbar').toggleClass('scrolled', $(this).scrollTop()>400);
  $('#logo').toggleClass('navbar-brand', $(this).scrollTop()>400);
});