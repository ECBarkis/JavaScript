function randomChance(leaving) {
	var count = 100;
	for (var i = 0; i < count; i++) {
		var chance = Math.ceil(Math.random() * 100);
		if (chance === 100) {
			var winnings = Math.floor(Math.random() * 50) + 51;
			count += winnings;
			console.log(count - i);
			if(!leaving) {
				return count - i;
			}
			if(leaving < (count - i)) {
				return count - i;
			}
		}
	}
	console.log(0);
	return 0;
}

randomChance(150);