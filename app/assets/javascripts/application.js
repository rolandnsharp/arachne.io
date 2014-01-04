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
//= require_directory .

$(document).ready(function() {

  $('.list-group-item').click(function(e) {
         $('.list-group a').removeClass('active');
            $(this).addClass('active');
    });

  $('#save').on('click', function() { 
  	console.log("save1");
  	$('#newForm').submit();
    $("#saved").show(0).delay(1000).hide(0);

  });

  $('#delete').on('click', function() { 
  	$.post("/"+userName+"/thoughts/"+thoughtid, { _method: 'delete' }, null, "script");
    confirm("Are you sure?");
    $("#deleted").show(0).delay(1000).hide(0);
    return false;
  });
  
  $('#newThought').on('click', function() { 
    $.get("/"+userName+"/thoughts/new/", null, "script");
  });

});


