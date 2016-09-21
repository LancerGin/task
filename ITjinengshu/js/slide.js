$(function(){
	
	var oldIndex = $(".bottom li").index();
	var len = $(".bottom li").length;
	
	function clickRight(){
		if(oldIndex==(len-1)){oldIndex=-1};
		newIndex = oldIndex + 1;
		showImg(newIndex);
		oldIndex++;
	};
	
	function clickLeft(){
		if(oldIndex==0){oldIndex=len;}
		newIndex = oldIndex - 1;
		showImg(newIndex);
		oldIndex--;
	};
	
	function showImg(index){	
		var adWidth = $(".slide img").width();
		$(".slide").stop(true,false).animate({left:-adWidth*index},600);
		$(".bottom li").removeClass("on")
			.eq(index).addClass("on");
	};
	
	$("#banner .right").click(function(){
		clickRight();
	});
	$("#banner .left").click(function(){
		clickLeft();
	});
	
	$(".bottom li").click(function(){
		oldIndex = $(".bottom li").index(this);
		showImg(oldIndex);
	});
	
});


function autoClick(){
	$("#banner .right").click();
};

$(function(){
	
	var adTimer;
	
	$("#banner").hover(function(){
		clearInterval(adTimer);
	},function(){
		adTimer = setInterval('autoClick()',2500);
	}).trigger("mouseleave");
	
});
