$(function(){
	$('li').click(function(){
		var me = this;
		$(me).toggleClass('active-li');
	})
	$('#sub').click(function(){
		$('.list-api-left ul').append($('.list-api-right ul .active-li'));		
	});
	$('#suball').click(function(){
		$('.list-api-left ul').append($('.list-api-right ul li'));
	})
})
