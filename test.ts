const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment 
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// let head: number = numbers[0]; // no error
console.log(numbers);


// 如果沒過值，預設會給第一個 numeric enum as 0, 其他會自動累加
// 所以如果自己給第一個設為 1，同理，從1開始累加
enum CardinalDirections {
	North = 1,
	Eats,
	South,
	West
}
let currentDirections = CardinalDirections.North;
console.log(currentDirections);
let currentDirections2 = CardinalDirections.West;
console.log(currentDirections2)
