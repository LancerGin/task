function addLoadEvent(func){
    var oldonload = window.onload;  
    if (typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else {
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
	
}

function addClass(element,value) {
	if (!element.className) {
		element.className = value;
	} else {
		newClassName  = element.className;
		newClassName+= " ";
		newClassName+= value;
		element.className = newClassName;
	}
}

function highlightPage() {
	var nav = document.getElementById("navigation");
	var links = nav.getElementsByTagName("a");
	for (var i=0; i<links.length; i++) {
		var linkurl =  links[i].getAttribute("href");
		var currenturl = window.location.href;
		if (currenturl.indexOf(linkurl) != -1) {
			links[i].setAttribute("class","here"); //也可以这样子写 links[i].className = "here";//
			var linktext = links[i].lastChild.nodeValue.toLowerCase();
			document.body.setAttribute("id",linktext);
		}
	}
}
addLoadEvent(highlightPage);

