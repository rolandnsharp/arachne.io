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
  
          // console.log("response");
    });

  $('#save').on('click', function() { 
  	console.log("save");
  	$('#newForm').submit();
    // $("#toolBar").css({"color": "green"});
    $("#saved").show(0).delay(1000).hide(0);

  });

  $('#delete').on('click', function() { 
    console.log(thoughtid);
    console.log(userName);
    console.log(userid);
  	
  	$.post("/"+userid+"/thoughts/"+thoughtid, { _method: 'delete' }, null, "script");
    confirm("Are you sure?");
    $("#deleted").show(0).delay(1000).hide(0);
    return false;
  });
  
  


  $('#newThought').on('click', function() { 
    // console.log(userid);
    $.get("/"+userName+"/thoughts/new/", null, "script");
    
  });





// $("#thought_network").on('click', function() { 

//    $("#toolBar).css({"color": "green"});

// });


$( "#thought_network" ).click(function() {
  $("#thought_content").css({"height": "200px"});
  $(".sigma-parent").show();
});

$( "#thought_network_hide" ).click(function() {
  $("#thought_content").css({"height": "100%"});
});
// $("#thought_network").click(function(){
//       if($("#newForm").hasClass('toggleHeight') {
//         $("#newForm").removeClass('toggleHeight');
//       } else { 
//         $("newForm").addClass('toggleHeight');
//       }
//     });

// $("#thought_network").toggle(function(){
//   $("#thought_content").css({"height": "200px"});
// });

//.css({"height": "200px"});   $("#thought_content").css({"height": "200px"});

// setTimeout(doSomething, 1000);

// function doSomething() {
//    $(".alert").alert('close');
// };

$("#reload").click(function() {
    location.reload();
});
});


