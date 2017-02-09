function printRange (start, end, interval) {
	if (!end) {end = start; start = 0;}
	if (!interval) {interval = 1;}
	for (var i = start; i < end; i = i + interval) {console.log(i);}
}

printRange(-2, 10);