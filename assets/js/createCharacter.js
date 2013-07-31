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

	document.write("<h1>Thank you for trying my site, " + pn + ".</h1>");
	document.write("Your character, " + cn + ", has the following attributes:<br />");
	document.write("<ul><li><strong>Character Name: </strong>" + cn + "</li>");
	document.write("<li><strong>Age: </strong>" + age + "</li>");
	document.write("<li><strong>Size: </strong>" + pSize + "</li>");
	document.write("<li><strong>Race: </strong>" + pRace + "</li>");
	document.write("<li><strong>Gender: </strong>" + pGender + "</li>");
	document.write("<li><strong>Height: </strong>" + feet + " ft." + inches + " in.</li>");
	document.write("<li><strong>Weight: </strong>" + weight + " " + pWeight + "</li></ul>");
	document.write("<p>Your character is a level " + lvl + " " + pClass + ".</p>");
	document.write("<p>S/he has amassed " + xp + " experience points thus far while adventuring.</p>");
	document.write("<p>" + cn + " is " + pAlignment + " and worships the diety, <strong><em>" + diety + "</em></strong>.</p>");
	document.write("<p>This is what you have had to say about " + cn + ":</p>");
	document.write("<p><em>" + bio + "</em></p>");
	document.write("<p>Please check back later to see how I have improved this site. My hope is to eventually turn this into a full-fledged character sheet suitable for actual gaming.</p>");
	document.write("<p>Thanks for checking it out.</p>");
}
