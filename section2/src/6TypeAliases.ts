// Type aliases: define the shape of an object

type Position = 'Programmer' | 'HR';

const myPosition: Position = 'Programmer';

type Colleague = {
  name: string;
  age: number;
  position: Position;
  greetBack?: Function;
};

const myColleague: Colleague = {
  name: 'John',
  age: 30,
  position: 'HR',
};

// define type on the fly
const myOtherColleague: {
  name: string;
  age: number;
  position: Position;
  tasks: string[];
} = {
  name: 'Mary',
  age: 28,
  position: 'HR',
  tasks: ['HR tasks'],
};

const myTalkyColleague: Colleague = {
  name: 'John',
  age: 30,
  position: 'Programmer',
  greetBack: () => {
    console.log('Cheers!!!');
  },
};

function greetColleague(colleague: Colleague) {
  console.log('Hi ' + colleague.name);
  if (colleague.greetBack) {
    colleague.greetBack();
  }
}

greetColleague(myColleague);
greetColleague(myOtherColleague); // notice type alias defined on the fly satisfies what Colleague type contains hence can be passed as parameter.
greetColleague(myTalkyColleague);
