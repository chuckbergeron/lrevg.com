//= require zepto

function scrollPageTo(scrollTo, time) {
  var scrollFrom = parseInt(document.body.scrollTop),
    i = 0,
    runEvery = 2; // run every 2ms

  scrollTo = parseInt(scrollTo);
  time /= runEvery;

  var interval = setInterval(function () {
    i++;

    document.body.scrollTop = (scrollTo - scrollFrom) / time * i + scrollFrom;

    if (i >= time) {
      clearInterval(interval);
    }
  }, runEvery);
};

$(function($) {

  var $document    = $(document),
    $rootNode      = $('html, body'),
    $footer        = $('footer');

  $footer.find('.copyright-year').html(new Date().getFullYear());


  // // Have menu items which point to content on this page scroll the body
  $('a.internal').on('click', function(){
    var href = this.href.match(/\#.*/)[0];
    var speed = 200;

    scrollPageTo($(href).offset().top + 'px', speed);
    setTimeout(function(){
      window.location.hash = href;
    }, speed + 300);

    return false;
  });

});
