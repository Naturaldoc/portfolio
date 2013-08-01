//alert("hello world");
function createChar() {
	var pn = document.getElementById('playerName').value;
	var cn = document.getElementById('charName').value;
	var lvl = document.getElementById('lvl').value;
	
	var c = document.getElementById('classList');
	var pClass = c.options[c.selectedIndex].text;
	
	var xp = document.getElementById('xp').value;
	
	var r = document.getElementById('raceList');
	var pRace = r.options[r.selectedIndex].text;
	
	var s = document.getElementById('sizeList');
	var pSize = s.options[s.selectedIndex].text;
	
	var age = document.getElementById('age').value;
	
	var g = document.getElementById('gender');
	var pGender = g.options[g.selectedIndex].text;
	
	var f = document.getElementById('feet');
	var feet = f.options[f.selectedIndex].text;
	
	var i = document.getElementById('inches');
	var inches = i.options[i.selectedIndex].text;
	
	var weight = document.getElementById('weight').value;

	var w = document.getElementById('weightOpts');
	var pWeight = w.options[w.selectedIndex].text;

	var a = document.getElementById('alignmentList');
	var pAlignment = a.options[a.selectedIndex].text;
	
	var diety = document.getElementById('diety').value;
	var bio = document.getElementById('bio').value;

	document.getElementById('form').style.display = "none";
	document.getElementById('character').style.display = "block";

	document.getElementById('pn').innerHTML = pn;
	document.getElementById('cn').innerHTML = cn;
	document.getElementById('cn1').innerHTML = cn;
	document.getElementById('cn2').innerHTML = cn;
	document.getElementById('cn3').innerHTML = cn;
	document.getElementById('a').innerHTML = age;
	document.getElementById('pSize').innerHTML = pSize;
	document.getElementById('pRace').innerHTML = pRace;
	document.getElementById('pGender').innerHTML = pGender;
	document.getElementById('ft').innerHTML = feet;
	document.getElementById('in').innerHTML = inches;
	document.getElementById('wt').innerHTML = weight;
	document.getElementById('pWeight').innerHTML = pWeight;
	document.getElementById('l').innerHTML = lvl;
	document.getElementById('pClass').innerHTML = pClass;
	document.getElementById('x_p').innerHTML = xp;
	document.getElementById('pAlignment').innerHTML = pAlignment;
	document.getElementById('god').innerHTML = diety;
	document.getElementById('biog').innerHTML = bio;
}
