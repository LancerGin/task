$(function(){
	var $li =$("#skin li");
	$li.click(function(){
		switchSkin(this.id);
	});
});
function switchSkin(skinName){
	$("#"+skinName).addClass("selected")
				.siblings().removeClass("selected");
	$("#cssfile").attr("href","css/skin/"+skinName+".css");
}
