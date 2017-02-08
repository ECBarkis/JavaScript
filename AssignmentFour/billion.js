var amount = 0.01;
var days = 0;
for (var i = 0; i < 31; i++) {
	amount *= 2;
}
console.log("In thirty days of doubling an amount starting with just a penny I have", amount, "now.");

amount = 0.01;
for (var i = 0; amount < 1001; i++) {
	amount += 2;
	days = i;
}
console.log("In", days, "I made", amount, "by starting with a penny and doubling each day");

amount = 0.01;
for (var i = 0; amount < 1000000001; i++) {
	amount += 2;
	days = i;
}
console.log("In", days, "I made", amount, "by starting with a penny and doubling each day");

amount = 0.01;
for (var i = 0; amount < Infinity; i++) {
	amount += 2;
	days = i;
}
console.log("In", days, "I made", amount, "by starting with a penny and doubling each day");