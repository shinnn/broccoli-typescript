interface Person {
  name: string;
}

function greeter(person : Person) {
  return 'Hello, ' + person.name;
}

console.log(greeter({name: 'Tom'}));
