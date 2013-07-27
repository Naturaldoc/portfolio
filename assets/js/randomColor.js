var color = "#"+(Math.random().toString(16) + '000000').slice(2,8);

//alert(color);
function changeBackground() {
	var color = "#"+(Math.random().toString(16) + '000000').slice(2,8);
	document.body.style.background = color;
}
function randomColor(color) {
	document.body.style.background = color;
}