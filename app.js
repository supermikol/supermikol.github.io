$(document).ready(function(){
  navBarListener();
  closeForm();
  formSubmissionListener();
})

var formSubmissionListener = function(){
  $('form').on('submit', function(e){
    e.preventDefault();
    var data = $(this).serialize()
    $.ajax({
      method: "POST",
      url: "https://formspree.io/mdu123@gmail.com",
      data: data
    }).done(function(response){
      console.log(response);
    }).fail(function(response){
      console.log(response.responseText);
    });
  });
}

var navBarListener = function(){
  $('.navbox').on('click','li',function(e){
    e.preventDefault();
    var item = $(this).attr('id');
    if (item === 'contact'){

      $('.overlay').fadeIn([3]);
      $('.form-box').fadeIn([3]);
    }
  })
};

var closeForm = function(){
  $('.overlay').on('click', function(e){
    $('.overlay').fadeOut([2]);
    $('.form-box').fadeOut([2]);
  });

};