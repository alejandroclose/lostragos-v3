console.log('main.js');
// Change navbar color on scroll

$(window).scroll(function(){
  $('.navbar').toggleClass('scrolled', $(this).scrollTop()>300);
  $('.navbar').toggleClass('navbar-dark', $(this).scrollTop()<300);
  $('.navbar').toggleClass('navbar-light', $(this).scrollTop()>300);
  $('#nav-logo').toggleClass('navbar-brand', $(this).scrollTop()>300);
  
});