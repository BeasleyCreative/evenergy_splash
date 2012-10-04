$(function(){
  var list = []
    , i = 10
  ;//var

  while(i)
    list.push({image:'./img/slides/evenergy_' + i-- + '.jpg'});

  $.supersized({
    autoplay: true,
    slides: list,
  });
});

$(function(){
  $contact = $('.contact');
  $method  = $contact.find('span');
  $getinfo = $('.getinfo');
  $splash  = $('.splash');
});

$(function(){

  $contact.click(function(e){
    e.preventDefault();
    $method.fadeOut();
    $splash.fadeOut(function(){
      $method.html('Submit').fadeIn();
      $getinfo.fadeIn();
      $contact.off('click').click(submitForm);
    });
  });
})

function submitForm(e){
  e.preventDefault();

  var $form  = $('form')
    , $email = $('#email')
    , $name  = $('#name')
    , $message = $('#message')
    , error, data
  ;//var

  email   = $email.val();
  name    = $name.val();
  message = $message.val();

  if(email == '' || !/.+@.+\..+/.test(email))
    error = markError($email);
  else
    markClean($email);

  if(name == '') 
    error = markError($name);
  else
    markClean($name);

  if(error) return;

  data = $.param({
    'Email': email,
    'Name': name,
    'Message': message
  });

  $.post('contact.php', data, function(res){
    $method.fadeOut();
    $getinfo.fadeOut(function(){
      $splash.fadeIn();
      $contact.off('click');
      $method.html('Thanks!').fadeIn();
    });
  });
}

function markError($obj){
  $obj.css({
    "outline-color" : "red",
    "border-color" : "red"
  });
  return true;
}

function markClean($obj){
  $obj.css({
    "outline-color" : "rgb(248,162,27)",
    "border-color" : ""
  });
}