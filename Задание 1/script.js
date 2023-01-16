'use strict';
var elem = document.getElementsByTagName('input');
var a = document.getElementById('test');
for (var i = 0; i < elem.length; i++) {
	elem[i].addEventListener('focus', func);
}
function func() {
	a.innerHTML = this.value;
}