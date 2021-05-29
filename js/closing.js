$('#button-toggle').click(function() {
    $(this).toggleClass('active');
    $('#nav-overlay').toggleClass('open').show();
   });
 
 
 // Close after clicking on a li
 
 $('#nav-overlay li').on('click', function(){
     $("#nav-overlay").hide();
     $("#button-toggle").removeClass("active");
    });