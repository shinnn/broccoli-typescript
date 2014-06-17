interface Person {
  givenName: string;
  surname: string;
}

function greeter(person : Person) {
  return 'Hello, ' + person.givenName + ' ' + person.surname;
}

var user = {
  givenName: 'John',
  surname: 'Smith'
};

console.log(greeter(user));
