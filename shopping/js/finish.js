$(function(){
	var $product = $(".pro_detail_right");
	$(".putIn a").click(function(){
		var name = $product.find("h4:first").text();
		var price = $product.find(".zjchange").text();
		var size = $product.find(".ccchange").text();
		var color = $product.find(".yschange").text();
		var num = $product.find(".slchoose select").val();
		var dialog = "感谢您的购买.\n请核对您的清单!\n"+
		                   "产品名："+name+";\n"+
		                   "颜色："+color+";\n"+
		                   "尺寸："+size+";\n"+
		                   "件数："+num+";\n"+
		                   "总价："+price+".\n";
		if(confirm(dialog)){            //弹出一个对话框，点击确认返回true，点击取消返回false；
			alert("您已下单！");
		};
		return false;
	});
});
