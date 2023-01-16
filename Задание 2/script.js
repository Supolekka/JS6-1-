'use strict';
var elem = document.getElementsByTagName('input');
for (var i = 0; i < elem.length; i++) {
	elem[i].addEventListener('click', func);
}
function func() {
	alert(this.value);
	this.removeEventListener('click', func);
}