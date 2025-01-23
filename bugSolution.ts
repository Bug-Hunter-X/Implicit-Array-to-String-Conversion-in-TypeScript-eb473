function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterImproved(person: string | string[]): string {
  if (Array.isArray(person)) {
    return "Hello, " + person.join(" ");
  } else {
    return "Hello, " + person;
  }
}

let user = ["Jane", "Doe"];
console.log(greeter(user)); //This will output unexpected result
console.log(greeterImproved(user)); //This outputs expected result

let user2 = "Jane Doe";
console.log(greeterImproved(user2)); //This also outputs expected result