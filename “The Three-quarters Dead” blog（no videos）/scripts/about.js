function showSection(id) {
	var divs = document.getElementsByTagName("div");
	for (var i=0; i<divs.length; i++) {
		if (divs[i].className.indexOf("section") == -1) continue;
		if (divs[i].getAttribute("id") != id) {
			divs[i].style.display = "none";
		} else {
			divs[i].style.display = "block";
		}
	}
}

function prepareInternalnav() {
	var nav = document.getElementById("internalnav");
	var links = nav.getElementsByTagName("a");
	for (var i=0; i<links.length; i++) {
		var sectionId = links[i].getAttribute("href").split("#")[1];
		document.getElementById(sectionId).style.display = "none";
		links[i].destination = sectionId;   // 定制属性“destination”
		links[i].onclick = function() {
			showSection(this.destination);
			return false;     // 取消“点击”的默认行为
		}
	}
}

addLoadEvent(prepareInternalnav);
