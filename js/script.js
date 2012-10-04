$(function(){
  var list = []
    , i = 10
  ;//var

  while(i)
    list.push({image:'/evenergy/img/slides/evenergy_' + i-- + '.jpg'});
  console.log(list);

  $.supersized({
    autoplay: true,
    slides: list,
  });
});


      
// jQuery(function($){
  
//   $.supersized({
  
//     // Functionality
//     slideshow               :   1,      // Slideshow on/off
//     autoplay        : 1,      // Slideshow starts playing automatically
//     start_slide             :   1,      // Start slide (0 is random)
//     stop_loop       : 0,      // Pauses slideshow on last slide
//     random          :   0,      // Randomize slide order (Ignores start slide)
//     slide_interval          :   3000,   // Length between transitions
//     transition              :   6,      // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
//     transition_speed    : 1000,   // Speed of transition
//     new_window        : 1,      // Image links open in new window/tab
//     pause_hover             :   0,      // Pause slideshow on hover
//     keyboard_nav            :   1,      // Keyboard navigation on/off
//     performance       : 1,      // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
//     image_protect     : 1,      // Disables image dragging and right click with Javascript
                           
//     // Size & Position               
//     min_width           :   0,      // Min width allowed (in pixels)
//     min_height            :   0,      // Min height allowed (in pixels)
//     vertical_center         :   1,      // Vertically center background
//     horizontal_center       :   1,      // Horizontally center background
//     fit_always        : 0,      // Image will never exceed browser width or height (Ignores min. dimensions)
//     fit_portrait          :   1,      // Portrait images will not exceed browser height
//     fit_landscape     :   0,      // Landscape images will not exceed browser width
                           
//     // Components             
//     slide_links       : 'blank',  // Individual links for each slide (Options: false, 'number', 'name', 'blank')
//     thumb_links       : 1,      // Individual thumb links for each slide
//     thumbnail_navigation    :   0,      // Thumbnail navigation
//     slides          :   [     // Slideshow Images
//                       {image : 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/slides/kazvan-1.jpg', title : 'Image Credit: Maria Kazvan', thumb : 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/thumbs/kazvan-1.jpg', url : 'http://www.nonsensesociety.com/2011/04/maria-kazvan/'},
//                       {image : 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/slides/kazvan-2.jpg', title : 'Image Credit: Maria Kazvan', thumb : 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/thumbs/kazvan-2.jpg', url : 'http://www.nonsensesociety.com/2011/04/maria-kazvan/'},  
//                       {image : 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/slides/kazvan-3.jpg', title : 'Image Credit: Maria Kazvan', thumb : 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/thumbs/kazvan-3.jpg', url : 'http://www.nonsensesociety.com/2011/04/maria-kazvan/'},
//                       {image : 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/slides/wojno-1.jpg', title : 'Image Credit: Colin Wojno', thumb : 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/thumbs/wojno-1.jpg', url : 'http://www.nonsensesociety.com/2011/03/colin/'},
//                       {image : 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/slides/wojno-2.jpg', title : 'Image Credit: Colin Wojno', thumb : 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/thumbs/wojno-2.jpg', url : 'http://www.nonsensesociety.com/2011/03/colin/'},
//                       {image : 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/slides/wojno-3.jpg', title : 'Image Credit: Colin Wojno', thumb : 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/thumbs/wojno-3.jpg', url : 'http://www.nonsensesociety.com/2011/03/colin/'},
//                       {image : 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/slides/shaden-1.jpg', title : 'Image Credit: Brooke Shaden', thumb : 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/thumbs/shaden-1.jpg', url : 'http://www.nonsensesociety.com/2011/06/brooke-shaden/'},
//                       {image : 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/slides/shaden-2.jpg', title : 'Image Credit: Brooke Shaden', thumb : 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/thumbs/shaden-2.jpg', url : 'http://www.nonsensesociety.com/2011/06/brooke-shaden/'},
//                       {image : 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/slides/shaden-3.jpg', title : 'Image Credit: Brooke Shaden', thumb : 'http://buildinternet.s3.amazonaws.com/projects/supersized/3.2/thumbs/shaden-3.jpg', url : 'http://www.nonsensesociety.com/2011/06/brooke-shaden/'}
//                   ],
                  
//     // Theme Options         
//     progress_bar      : 1,      // Timer for each slide             
//     mouse_scrub       : 0
    
//   });
// });
        


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