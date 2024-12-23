function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];
//console.log(greeter(user)); //Error

// Solution 1: Modify the function to accept an array
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(", ");
}
console.log(greeterArray(user));

// Solution 2: Pass a single string to the function
let singleUser = user[0];
console.log(greeter(singleUser));