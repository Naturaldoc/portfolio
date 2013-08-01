var offset = Math.floor(Math.random() * (200 - 80) + 80);

function initialize() {
	month();
	day();
	year();
}

function month() {
	var sel = document.getElementById('month');
	for (var i = 1; i <= 12; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = i;
		if (i < 10) {
			opt.value = '0' + i;
		} else {
			opt.value = i;
		}
		sel.appendChild(opt);
	}
}

function day() {
	var sel = document.getElementById('day');
	for (var i = 1; i <= 31; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = i;
		if (i < 10) {
			opt.value = '0' + i;
		} else {
			opt.value = i;
		}
		sel.appendChild(opt);
	}
}

function year() {
	var sel = document.getElementById('year');
	for (var i = 1900; i <= 2013; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = i;
		opt.value = i;
		sel.appendChild(opt);
	}
}

function newBG(){
	var m = document.getElementById('month');
	var mo = parseInt(m.options[m.selectedIndex].value) + offset;

	var d = document.getElementById('day');
	var dy = parseInt(d.options[d.selectedIndex].value) + offset;

	var y = document.getElementById('year');
	var yr = y.options[y.selectedIndex].value;

	function fixYr (yr) {
		yr.split("");
		var sumYr = 0;
		var y;
		
		for (var i = 0; i < yr.length; i++) {
			y = parseInt(yr[i]);
			if (!isNaN(y)) sumYr += y;
		}
		sumYr += 128;
		sumYr = sumYr.toString(16);

		if (sumYr.lenth < 2) {
			sumYr = "0" + sumYr;
		}

		return sumYr;
	}
	/*yr = yr.toString().split("");
	var sumYr = 0;
	var v;
	for (var i = 0; i < yr.length; i++) {
		v = parseInt(yr[i]);
		if (!isNaN(v)) sumYr += v;
	}
	if (sumYr.lenth < 2) {
		sumYr = "0" + sumYr;
	}*/
	//document.write(sumYr);
	
	tempMo = mo.toString(16);
	tempDy = dy.toString(16);
	tempYr = fixYr(yr);
	
	//hexString = mo.toString(16) + dy.toString(16) + sumYr.toString(16);
	
	console.log(tempMo);
	console.log(tempDy);
	console.log(tempYr);
	
	newColor = "#" + tempMo + tempDy + tempYr;
	console.log(newColor);
	document.body.style.background = newColor;
	/*var d = new Date(year, month, day);
	d.setMonth(mo);
	d.setDate(dy);
	d.setFullYear(yr);

	document.write(d);*/
}

