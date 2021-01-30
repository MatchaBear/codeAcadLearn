// truthy and falsy assignment:

let defaultName;
let username;

if(username)
	defaultName = username;
else defaultName = 'Stranger';
console.log(defaultName); // prints Stranger
console.log(username); // prints undefined


let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool;

console.log(`The ${writingUtensil} is mightier than the sword.`);