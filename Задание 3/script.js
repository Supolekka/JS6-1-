'use strict';
var elem = document.getElementsByTagName('p');
for (var i = 0; i < elem.length; i++) {
	elem[i].addEventListener('click', func);
}
function func() {
	this.innerHTML = this.innerHTML * this.innerHTML;
}