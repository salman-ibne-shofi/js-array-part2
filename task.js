// Task-1
const colors = ["red", "blue", "green", "yellow", "orange"];

const rev_colors = colors.reverse();
console.log(rev_colors);

// Task-2
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);

const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 === 0) {
		evenNumbers.push(numbers[i]);
	}
}

console.log(evenNumbers);

// Task-3
var numbers = ["Tom", "Tim", "Tin", "Tik"];
let result = "";

for(let name of numbers){
    result += name;
}

console.log(result);

// Task-4
const statement = "I am a hand working person";
const reversedStatement = statement.split(" ").reverse().join(" ");

console.log(reversedStatement);
