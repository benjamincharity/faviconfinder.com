addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);

function hideURLbar(){
  window.scrollTo(0,1);
}

$('input').keypress(function(event) {
  if(event.which === 13) {
    $('button').click();
  }
});

$('button').click(function(event) {
  var google = 'http://www.google.com/s2/favicons?domain=';
  var site   = $('input').val();

  $('img').attr('src', google + site).fadeIn();

  $('input').blur();
  return false;
});
