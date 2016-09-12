addLoadEvent ( prepareLinks );
addLoadEvent ( prepareImg );


function prepareLinks(){
	if (!document.getElementsByTagName) {
		return false;
	}
	if (!document.getElementById) {
		return false;
	}   
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i=0;i<links.length;i++){	
			links[i].onclick = function(){               
				return showPic(this);
		}
	}
}

function showPic(whichpic){
	
if (!document.getElementById("placeholder")) return true;
var source = whichpic.getAttribute("href");
var placeholder = document.getElementById("placeholder");
placeholder.setAttribute("src",source);
if (!document.getElementById("description")) return false;

if (whichpic.getAttribute("title")){
	var text = whichpic.getAttribute("title");
}else{
	var text = " ";
}
var description = document.getElementById("description");
description.firstChild.nodeValue = text;

return false;
}



function prepareImg(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var img = document.createElement("img");
	img.setAttribute("id","placeholder");
	img.setAttribute("src","images/photos/placeholder.jpg");
	img.setAttribute("alt","my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var txt = document.createTextNode("Choose an image");
	description.appendChild(txt);
	var gallery = document.getElementById("imagegallery");
	insertAfter(description,gallery);
	insertAfter(img,description);
}






