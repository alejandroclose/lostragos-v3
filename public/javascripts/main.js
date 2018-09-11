console.log('main.js');
// Change navbar color on scroll

$(window).scroll(function(){
  $('.navbar').toggleClass('scrolled', $(this).scrollTop()>400);
  $('.navbar').toggleClass('navbar-dark', $(this).scrollTop()<400);
  $('.navbar').toggleClass('navbar-light', $(this).scrollTop()>400);
  $('#logo').toggleClass('navbar-brand', $(this).scrollTop()>400);
  
});