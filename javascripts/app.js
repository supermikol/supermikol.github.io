$(document).ready(function(){

  navBarListener();
  closeForm();
  formSubmissionListener();
  PDFObject.embed("files/mdu_resume.pdf", "#resumeViewer");
  projectPageListener();
})

var formSubmissionListener = function(){
  $('#form-box').on('submit', 'form', function(e){
    e.preventDefault();
    var data = $(this).serialize()
    $.ajax({
      method: "POST",
      url: "https://formspree.io/mdu123@gmail.com",
      data: data,
      dataType: 'json',
      crossDomain: true,
      beforeSend: function() {
        $('#form-box').html('<div class="alert alert--loading">Sending message…</div>');
      },
      success: function(data) {
        $('#form-box').find('.alert--loading').hide();
        $('#form-box').html('<div class="alert alert--success">Message sent!</div>');
      },
      error: function(err) {
        $('#form-box').find('.alert--loading').hide();
        $('#form-box').html('<div class="alert alert--error">Ops, there was an error.</div>');
      }

    });
  });
}

var navBarListener = function(){
  $('.navbox').on('click','li',function(e){
    e.preventDefault();
    var item = $(this).attr('id');
    if (item === 'contact'){
      $('.overlay').fadeIn([3]);
      $('#form-box').fadeIn([3]);
    } else if (item === 'resume'){
      $('.overlay').fadeIn([3]);
      $('#resumeViewer').fadeIn([3]);
    } else if (item == 'about'){
      $('.overlay').fadeIn([3]);
      $('#about-me').fadeIn([3]);
    } else if (item == 'projects'){
      $('.overlay').fadeIn([3]);
      $('#myProjects').fadeIn([3]);
    } else if (item == 'mean-wall'){
      event.stopPropagation();
      console.log(this);
      window.open("http://mean-wall.supermikol.com", '_blank');
    }
  })
};

var closeForm = function(){
  $('.overlay').on('click', function(e){
    $('.overlay').fadeOut([2]);
    $('#form-box').fadeOut([2]);
    $('#about-me').fadeOut([2]);
    $('#myProjects').fadeOut([2]);
    $('#resumeViewer').fadeOut([2]);
  });
  $('#resumeViewer').on('click', function(e){
    $('.overlay').fadeOut([2]);
    $('#resumeViewer').fadeOut([2]);
  })

};

var projectPageListener = function() {
  $('.thumb-nav').on('click', 'a', function(e){
    // e.preventDefault();
    var display = $(this).attr('href')
    $('.proj-display').hide();
    $(display).show();
    $(display + ' .carousel').slick({
      dots: true,
      fade: true
    });
  })
}