function Today() {
    var today = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var m = today.getMonth();
    var d = today.getDate();
    var y = today.getFullYear();
    document.getElementById("date").innerHTML = d+" "+months[m]+" "+y;

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    //add a zero (0) in front of minutes and seconds that are < 10
    m = checkTime(m);
    s = checkTime(s);
	document.getElementById("time").innerHTML = h+":"+m+":"+s;
	t=setTimeout(function(){Today()},500);
}

/*
//Attempt to use AM/PM time as opposed to military time
//needs more logic to make it work correctly.
//not sure why its not working. Take the time to think it through!!!!
function checkHour(hour) {
	if (hour >= 12) {
		ap = "PM";
		hour = hour - 11;
	}else{
		ap = "AM";
	}

	return hour;
}
*/
function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}
