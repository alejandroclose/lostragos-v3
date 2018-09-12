console.log('main.js');
// Change navbar color on scroll

$(window).scroll(function(){
  $('.navbar').toggleClass('scrolled', $(this).scrollTop()>325);
  $('.navbar').toggleClass('navbar-dark', $(this).scrollTop()<325);
  $('.navbar').toggleClass('navbar-light', $(this).scrollTop()>325);
  $('#nav-logo').toggleClass('navbar-brand', $(this).scrollTop()>325);
  
});