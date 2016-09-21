$(function(){
	var index = 0;
	var len = $(".num>li").length;
	var adTimer;
	
	$(".num li").mouseover(function(){
		index = $(".num li").index(this);
		showImg(index);
	}).eq(0).mouseover();
	
	$(".ad").hover(function(){
		clearInterval(adTimer);
	},function(){
		adTimer = setInterval(function(){
			showImg(index);
			index++;
			if(index==len){index=0;}
		},3000);
	}).trigger("mouseleave");
	
	function showImg(index){
		var adHeight = $(".content_right .ad").height();
		$(".slider").stop(true,false).animate({top:-adHeight*index},1000);
		$(".num li").removeClass("on")
			.eq(index).addClass("on");
	};
	          
});
