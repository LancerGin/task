$(function(){
	$(".ccchoose ul li").click(function(){
		var size = $(this).children().text();
		$(".ccchange").text(size);
	});
	
	var price = $(".price span").text();
	$(".slchoose select").change(function(){
		var num = $(this).val();
		var amount = num*price;
		$(".zjchange").text(amount);
	});
});
