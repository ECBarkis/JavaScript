// Provided the these variables print
// "It's almost 9 in the morning"

var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

if (MINUTE > 30) {
	HOUR ++;
	if (PERIOD == "AM") {
		console.log("It's almost", HOUR, "in the morning");
	} else {
		console.log("It's almost", HOUR, "in the evening");
	}
}

// Provided the these variables print
// "It's just after 7 in the evening"

var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

if (MINUTE > 30) {
	HOUR ++;
	if (PERIOD == "AM") {
		console.log("It's almost", HOUR, "in the morning");
	} else {
		console.log("It's almost", HOUR, "in the evening");
	}
} else {
	if (PERIOD == "AM") {
		console.log("It's just after", HOUR, "in the morning");
	} else {
		console.log("It's just after", HOUR, "in the evening");
	}
}

// Creating functionality by distingushing differnet times of day

if (MINUTE == 45) {
	HOUR ++;
	if (PERIOD == "AM") {
		console.log("It's a quarter till", HOUR, "in the morning");
	} else {
		console.log("It's a quarter till", HOUR, "in the evening");
	}
}
if (MINUTE == 30) {
	if (PERIOD == "AM") {
		console.log("It's half past", HOUR, "in the morning");
	} else {
		console.log("It's half past", HOUR, "in the evening");
	}
}
if (MINUTE == 15) {
	if (PERIOD == "AM") {
		console.log("It's a quarter past", HOUR, "in the morning");
	} else {
		console.log("It's a quarter past", HOUR, "in the evening");
	}
}
if (MINUTE == 5) {
	if (PERIOD == "AM") {
		console.log("It's five after", HOUR, "in the morning");
	} else {
		console.log("It's five after", HOUR, "in the evening");
	}
}