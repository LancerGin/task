$(function(){
	$(".yschoose ul li img").click(function(){
		var imgSrc = $(this).attr("src");
		var i = imgSrc.lastIndexOf(".");    //获取图片文件名中最后一个"."的位置
		var unit = imgSrc.substring(i);     //获取图片文件名中第 i个字符串（"."）后面的字符串
		imgSrc_ = imgSrc.substring(0,i);    //获取图片文件名中第1个字符串到第 i个字符串（"."）之间所有的的字符串
		var imgSrc_small = imgSrc_ + "_one_small"+unit;
		var imgSrc_big = imgSrc_ +"_one_big"+unit;
		var imgSrc_list1 = imgSrc_+"_one"+unit;
		var imgSrc_list2 = imgSrc_+"_two"+unit;
		var imgSrc_list3 = imgSrc_+"_three"+unit;
		$("#bigImg").attr({"src":imgSrc_small,"jqimg":imgSrc_big});
		$("#thickImg").attr("href",imgSrc_big);
		$("#xijie ul li img").eq(0).attr("src",imgSrc_list1);
		$("#xijie ul li img").eq(1).attr("src",imgSrc_list2);
		$("#xijie ul li img").eq(2).attr("src",imgSrc_list3);
		var alt = $(this).attr("alt");
		$(".yschange").text(alt);
	});
});
