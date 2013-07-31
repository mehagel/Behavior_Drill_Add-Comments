$(document).ready(function(){

     $('form').on('submit', function(e){
      e.preventDefault();
      var element = "<li>" + $('#content').val() + "<span class='author'>" + $('#name').val() + "</span>"
      $('#comment_list').append(element);
      $('#new_comment').hide();
      $('#new_comment')[0].reset();
      $('#new_comment_button').show();

    });

    $('#new_comment_button').on('click', function(e){
      e.preventDefault();
      $(this).hide();
      $('#new_comment').show();
    });

});
