
function resetFields(whichform) {
	for (var i=0; i<whichform.elements.length; i++) {
		var element = whichform.elements[i];
		if (element.type == "submit") continue;
		if (!element.defaultValue) continue;
		element.onfocus = function(){
			if (this.value == this.defaultValue) {
				this.value = "";
			}
		}
		element.onblur = function(){
			if (this.value == "") {
				this.value = this.defaultValue;
			}
		}
	}
}

function prepareForms() {
	var form = document.forms          //遍历文档中的每一个Form对象。
	for (var i=0; i<form.length; i++) {
		resetFields(form[i]);
		form[i].onsubmit = function() {
			return validateForm(this);
		}
	}
}

function isFilled(field) {
	if (field.value.length < 1 || field.value == field.defaultValue) {
		return false;
	} else {
		return true;
	}
}

function isEmail(field) {
	if (field.value.indexOf("@") == -1 || field.value.indexOf(".") == -1) {
		return false;
	} else {
		return true;
	}
}

function validateForm(whichform) {
	for (var i=0; i<whichform.elements.length; i++) {
		var element = whichform.elements[i];
		if (element.className.indexOf("required") != -1) {
			if ( !isFilled(element) ) {
				alert(" "+element.name+" ");
				return false;
			}
		}
		if (element.className.indexOf("email") != -1) {
			if ( !isEmail(element) ) {
				alert(" 请输入正确的email地址！");
				return false;
			}
		}	
	}
	return true;
}

addLoadEvent(prepareForms);