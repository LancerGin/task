$(function(){
	$("#xijie ul li img").click(function(){
		var imgSrc = $(this).attr("src");
		var i = imgSrc.lastIndexOf(".");    //获取图片文件名中最后一个"."的位置
		var unit = imgSrc.substring(i);     //获取图片文件名中第 i个字符串（"."）后面的字符串
		imgSrc_ = imgSrc.substring(0,i);    //获取图片文件名中第1个字符串到第 i个字符串（"."）之间所有的的字符串
		var imgSrc_small = imgSrc_ + "_small"+unit;
		var imgSrc_big = imgSrc_ +"_big"+unit;
		$("#bigImg").attr({"src":imgSrc_small,"jqimg":imgSrc_big});
		$("#thickImg").attr("href",imgSrc_big);
	});
});
