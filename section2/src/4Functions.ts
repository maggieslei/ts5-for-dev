function greet(name: string) {
  return 'Hello ' + name;
}

const johnGreet = greet('John');

function greetToUpperCase(name: string) {
  return 'Hello ' + name.toUpperCase();
}

// hover over to see name?: string in function signature
function consoleGreetJohn(name = 'John') {
  console.log('Hello ' + name.toUpperCase());
}

consoleGreetJohn();
consoleGreetJohn('Bill');

const greetToConsole = (name: string) => {
  console.log('Hello ' + name);
};

function greetMultiple(...names: string[]) {
  names.forEach((name) => {
    greetToConsole(name);
  });
}

greetMultiple('John');
greetMultiple('Maggie', 'Mary', 'Max');
