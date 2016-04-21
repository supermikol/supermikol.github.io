$(document).ready(function(){
  navBarListener();
  closeForm();
  formSubmissionListener();
  PDFObject.embed("files/mdu_resume.pdf", "#resumeViewer");
})

var formSubmissionListener = function(){
  $('form').on('submit', function(e){
    e.preventDefault();
    var data = $(this).serialize()
    $.ajax({
      method: "POST",
      url: "https://formspree.io/mdu123@gmail.com",
      data: data,
      crossDomain: true
    }).done(function(response){
      alert("Message Sent!");
      $('.overlay').fadeOut([2]);
      $('.form-box').fadeOut([2]);
    }).fail(function(response){
      alert("Message is sent!");
      $('.overlay').fadeOut([2]);
      $('.form-box').fadeOut([2]);
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
    } else if (item === 'resume'){

      $('.overlay').fadeIn([3]);
      $('#resumeViewer').fadeIn([3]);
    }
  })
};

var closeForm = function(){
  $('.overlay').on('click', function(e){
    $('.overlay').fadeOut([2]);
    $('.form-box').fadeOut([2]);
    $('#resumeViewer').fadeOut([2]);
  });

};