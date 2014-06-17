function greeter(person) {
    return 'Hello, ' + person.givenName + ' ' + person.surname;
}

var user = {
    givenName: 'John',
    surname: 'Smith'
};

console.log(greeter(user));
