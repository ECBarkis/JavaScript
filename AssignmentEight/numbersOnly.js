function numbersOnly (array) {
	for (var i = 0; i < array.length; i++) {
		if (typeof(array[i]) != "number") {
			for (var j = i; j < array.length - 1; j++) {
				var temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
			array.pop();
		}
	}
	return array;
}
var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
