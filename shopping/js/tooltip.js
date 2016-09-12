$(function(){
	var x = 10;
	var y = 20;
	$("a.tooltip").mouseover(function(e){
		this.myTitle = this.title;
		this.title = "";
		var tooltip ="<div id='tip'>"+this.myTitle+"</div>";//创建div元素
		$("body").append(tooltip);     //把div元素追加到文档中
		$("#tip")
			.css({
				"top":(e.pageY+y) + "px",
				"left":(e.pageX+x) + "px"
			}).show("fast");             //设置x坐标和y坐标，并且显示
	}).mouseout(function(){
		this.title = this.myTitle;
		$("#tip").remove();                //移除
	}).mousemove(function(e){
		$("#tip")
			.css({
				"top":(e.pageY+y) + "px",
				"left":(e.pageX+x) + "px"
			});
	});
});
