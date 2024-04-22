// Submit Form By Ajax
$("#SearchForm #_Rxc").keyup(function(e) {
	//$(this).closest('#iForm').submit();
	e.preventDefault(); // avoid to execute the actual submit of the form.
    var form = $("#SearchForm");
    var url = form.attr('action');	

    $.ajax({
		type: "POST",
		url: url,
		data: form.serialize(), // serializes the form's elements.
		success: function(data)
	   {	
			$('.SearchResult').show();
			$('.SearchResult').html("");
			$('.SearchResult').html(data);
	   }
	});	
});


$('.SearchResult').click(function(e) { //button click class name is myDiv
  e.stopPropagation();
});

$('body').click(function(evt){  
	if($(evt.target).closest('#SearchForm #_Rxc').length){
		$('.SearchResult').show();
	}else{
		$('.SearchResult').hide();
	}
});
			
$("#_Rxc").click(function() {
	var xx = $(this).val();
	if (xx !== "")
	{
		 $('.SearchResult').show();
		 console.log(xx);

	}else{
		$('.SearchResult').hide();
		console.log("xxxxxxx");
	}
});

// Submit Form By Ajax
$("#iForm").submit(function(e) {
	e.preventDefault(); // avoid to execute the actual submit of the form.
    var form = $(this);
    var url = form.attr('action');	
	
    $.ajax({
		type: "POST",
		url: url,
		data: form.serialize(), // serializes the form's elements.
		success: function(data)
	   {	
			$('.ShowResult').fadeIn();
			$('.ShowResult').html("");
			$('.ShowResult').html(data);
			//$('.ClearAfter').val("");
			//$('.ShowResult').fadeOut(5000);
	   }
	});
});


// BTNyes Click
// Submit Form By Ajax
$("#iForm-yes").submit(function(e) {
	e.preventDefault(); // avoid to execute the actual submit of the form.
    var form = $(this);
    var url = form.attr('action');	
	
    $.ajax({
		type: "POST",
		url: url,
		data: form.serialize(), // serializes the form's elements.
		success: function(data)
	   {	
			$('#Selectis').fadeOut();
			$('.ShowResult').html("");
			$('.ShowResult').html(data);
			//$('.ClearAfter').val("");
			//$('.ShowResult').fadeOut(5000);
	   }
	});
});


// Submit Form By Ajax
$(".BTNis").click(function() {
    var url = $(this).attr('action');	
	var is = $(this).attr('is');	
    $.ajax({
		type: "POST",
		url: url,
		data: {is:is}, 
		success: function(data)
	   {	
			$('#Selectis').fadeOut();
			$('.ShowResultzx').html("");
			$('.ShowResultzx').html(data);
	   }
	});
});

//mvc/02-banks/ajax.php

