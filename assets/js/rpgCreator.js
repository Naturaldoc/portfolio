function initialize() {
	classOptions();
	raceOptions();
	sizeOptions();
	alignOptins();
	heightFt();
	heightIn();
	weight();
}
function classOptions () {
	var classes = ["Ardent", "Artificer", "Assassin", "Avenger", "Barbarian", "Bard", "Battlemind", "Cleric", "Druid", "Fighter", "Invoker", "Monk", "Paladin", "Psion", "Ranger", "Rogue", "Runepriest", "Seeker", "Shaman", "Sorcerer", "Swordmage", "Warden", "Warlock", "Warlord", "Wizard", "Vampire"];
	var sel = document.getElementById('classList');
	for(var i = 0; i < classes.length; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = classes[i];
		opt.value = classes[i].toLowerCase();
		sel.appendChild(opt);
	}
}
function raceOptions() {
	var races = ["Dragonborn", "Dwarf", "Eladrin", "Elf/HighElf", "Gnome/RockGnome", "Half-elf", "Half-orc", "Halfling", "Human", "Tiefling"];
	var sel = document.getElementById('raceList');
	for(var i = 0; i < races.length; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = races[i];
		opt.value = races[i].toLowerCase();
		sel.appendChild(opt);
	}
}
function sizeOptions() {
	var sizes = ["Fine", "Diminutive", "Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan", "Colossal", "Colossal+"];
	var sel = document.getElementById('sizeList');
	for(var i = 0; i < sizes.length; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = sizes[i];
		opt.value = sizes[i].toLowerCase();
		sel.appendChild(opt);
	}
}
function alignOptins() {
	var alignments = ["Lawful Good", "Lawful Neutral", "Lawful Evil", "Neutral Good", "Neutral", "Neutral Evil", "Chaotic Good", "Chaotic Neutral", "Chaotic Evil"];
	var sel = document.getElementById('alignmentList');
	for(var i = 0; i < alignments.length; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = alignments[i];
		opt.value = alignments[i].toLowerCase();
		sel.appendChild(opt);
	}
}
function heightFt() {
	var sel = document.getElementById('feet');
	for(var i = 0; i < 100; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = i;
		opt.value = i;
		sel.appendChild(opt);
	}
}
function heightIn() {
	var sel = document.getElementById('inches');
	for(var i = 0; i < 12; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = i;
		opt.value = i;
		sel.appendChild(opt);
	}
}
function weight() {
	var weightOptions = ["Ounces", "Pounds", "Tons"];
	var sel = document.getElementById('weightOpts');
	for (var i = 0; i < weightOptions.length; i++) {
		var opt = document.createElement('option');
		opt.innerHTML = weightOptions[i];
		opt.value = weightOptions[i].toLowerCase();
		sel.appendChild(opt);
	}
}