$(document).ready(function() {
     $("#add").click(function() {
         $("#addUserForm").css('display','block');
     });
     $("#connect").click(function() {
         $("#connectForm").css('display','block');
     });
            
     $("#fermerAddUserForm").click(function() {
         $("#addUserForm").css('display','none');
     });
     $("#fermerConnectForm").click(function() {
         $("#connectForm").css('display','none');
    });
            
});


$(document).ready(function() {
    $(".edit").click(function() {
         var clicked = $(this).parent().closest('article');
         clicked.css('display','none');
        $(this).parent().find(".hidden").css('display','block');

     });
});