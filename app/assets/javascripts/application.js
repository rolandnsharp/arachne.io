// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .


$(document).ready(function() {
  $('.list-group-item').click(function(e) {
         $('.list-group a').removeClass('active');
            $(this).addClass('active');
  
          // console.log("response");
    });

  $('#save').on('click', function() { 
  	console.log("save");
  	$('#newForm').submit();
  });

  $('#delete').on('click', function() { 
  	confirm("Are you sure?");
  	$.post("/users/"+userid+"/thoughts/"+thoughtid+"/", { _method: 'delete' }, null, "script");
  });





$( "#thought_network" ).click(function() {

   $("#thought_content").css({"height": "200px"});
 
});


setTimeout(doSomething, 1000);

function doSomething() {
   $(".alert").alert('close');
};



});



