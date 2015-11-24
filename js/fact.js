var d = new Date();
cachedFact = "Fact Loading...";

function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function changeTimeLeft() {
	d = new Date();
	var s = d.getSeconds();
	document.getElementById("secondsleft").innerHTML = 60-s;
}

function addCache() {
	$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Frandomfactgenerator.net%2Ffactscript.php'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(data) {
		data = data.query.results.body.content.split("$('#randomfactbox').html(")[1].split(');')[0];
		data = data.substring(1, data.length-3)
		cachedFact = capitalise(data);
		setNewFact();
	});
}

function setNewFact(){
	document.getElementById("fact").innerHTML = cachedFact.replace("?","'");
	$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Frandomfactgenerator.net%2Ffactscript.php'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(data) {
		data = data.query.results.body.content.split("$('#randomfactbox').html(")[1].split(');')[0];
		data = data.substring(1, data.length-3)
		console.log(capitalise(data));
		cachedFact = capitalise(data);
	});
}

function startTimer() {
	if (d.getSeconds() <= 2) {
		timer();
		clearTimeout(timerStartTimer);
	}
	else {
		d = new Date();
	}
}

function timer() {
	console.log("Started the Timer at " + String(d));
	setNewFact();
	var minuteTimer = setInterval(setNewFact, 60000);
}

var timerStartTimer = setInterval(changeTimeLeft, 1000)
var timerStartTimer = setInterval(startTimer, 1000)
addCache();