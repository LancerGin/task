$(function(){
	var x = $(".scrollNews");          //需要把$(".scrollNews")作为参数传递给scrollNews()
	$(".scrollNews").hover(function(){
		clearInterval(scrollTimer);
	},function(){
		scrollTimer = setInterval(function(){
			scrollNews(x);
		},3000);
	}).trigger("mouseleave");

	function scrollNews(obj){
		var $self = obj.find("ul:first");
		var lineHeight = $self.find("li:first").height();  //获取li行高
		$self.animate({"marginTop":-lineHeight +"px"},600,function(){
			$self.css({marginTop:0}).find("li:first").appendTo($self);
		});
	};
});
