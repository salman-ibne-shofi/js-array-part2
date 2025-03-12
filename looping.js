/**
 * LOOPING Technique
 * 1. for loop
 * 2. while loop
 * 3. do while ---> ignore
 * 4. for of ---> to loop array
 * 5. for in ---> to loop object
 *
 */

const friends = ["Elon", "Bill", "Mark", "Waren"];

for (const friend of friends) {
	// console.log(friend);
}

for (let i = 0; i < friends.length; i++) {
	console.log(i);
	// console.log(friends[i]);
}

const numbers = [12, 14, 19, 16, 20, 25, 30, 41];

for (let i = 0; i < numbers.length; i++) {
	// console.log(numbers[i]);
}

// let i = 0;
// while(i < friends.length){
//     console.log(friends[i]);
//     i++;
// }

let i = 0;
while (i < friends.length) {
	console.log(friends[i]);
	i++;
}
