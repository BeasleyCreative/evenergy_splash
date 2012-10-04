$(function(){
  $.supersized({
    slides:[
      {image: 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/slides/kazvan-1.jpg', title : 'Image Credit: Maria Kazvan'}
    ]
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

// // Form Validation/Processing
// $(function() {
//   var $form = $('#contact-form')

//     // fields
//     , $message  = $form.find('#form-message')
//     , $email    = $form.find('#form-email')
//     , $interest = $form.find('#form-booking')

//     // values
//     , message, email, interest

//     // settings
//     , shade = 'red'

//     , error, data
//   ;//var

//   $form.find('.button').click(function(e){
//     e.preventDefault();
//     error = false;

//     message  = $message.val();
//     email    = $email.val();
//     interest = $interest.prop('checked');

//     interest = interest? 'YES' : 'NO';

//     if(email == ''){
//       $('#form-email-label').css({'color':shade});
//       $email
//         .css({
//           'outline-color':shade,
//           'border-color' :shade
//         })
//         .focus();
//       error = true;
//     }
//     else if(!/.+@.+\..+/.test(email)){
//       $('#form-email-label').css({'color':shade});
//       $email
//         .css({
//           'outline-color':shade,
//           'border-color' :shade
//         })
//         .focus();
//       error = true;
//     }
//     else{
//       $('#form-email-label')
//         .css({'color':''});
//       $email
//         .css({
//           'outline-color':'',
//           'border-color' :''
//         });
//     }

//     if(message == ''){
//       $('#form-message-label').css({color:shade});
//       $message
//         .css({
//           'outline-color':shade,
//           'border-color':shade
//         })
//         .focus();
//       error = true;
//     }
//     else{
//       $('#form-message-label').css({'color':''});
//       $message
//         .css({
//           'outline-color':'',
//           'border-color' :''
//         });
//     }

//     if(error) return;

//     data = $.param({
//       'Email'  : email,
//       'Message': message,
//       'Interested In Booking': interest
//     });

//     $.post('contact.php', data, function(res){
//       var $contact  = $('#contact')

//         , $response = $('<div class="response"/>')
//         , $logo     = $('#mainLogo').clone().attr('id','')
//         , $message  = $('<p>Thanks for contacting us! We\'ll be in touch soon!</p>')
//       ;//var

//       $response
//         .append($logo)
//         .append($message)
//         .height($form.height())
//       ;//$response

//       $form.animate({opacity:0}, function(){
//         $form.replaceWith($response);
//         $response.animate({height:150,opacity:1});
//       });
//     });
//   });
