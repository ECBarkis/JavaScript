function fancyArray(par) {
	var sym = "->";
	var arr = ["James", "Jill", "Jane", "Jack"];
	if (par === true) {
		for (var i = arr.length - 1; i >= 0; i--) {
		console.log(i + " " + sym + " " + arr[i]);
		}
	} else {
		if (par) {sym = par}
		for (var i = 0; i < arr.length; i++) {
			console.log(i + " " + sym + " " + arr[i]);
		}
	}
}

fancyArray();
fancyArray(true);
fancyArray("::");