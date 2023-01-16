'use strict';
var elem = document.getElementsByTagName('input');
for (var i = 0; i < elem.length; i++) {
	elem[i].addEventListener('focus', func);
}
function func() {
	var given = this.dataset.length;
	var properly = this.value.length;
	if(given == properly){
		this.style.borderColor = 'green';
	} else {
		this.style.borderColor = 'red';
	}
}