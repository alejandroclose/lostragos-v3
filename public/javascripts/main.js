console.log('main.js');
// Change navbar color on scroll

$(window).scroll(function(){
  $('.navbar').toggleClass('scrolled', $(this).scrollTop()>800)
});