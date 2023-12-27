"use strict";
// Type aliases: define the shape of an object
const myPosition = 'Programmer';
const myColleague = {
    name: 'John',
    age: 30,
    position: 'HR',
};
// define type on the fly
const myOtherColleague = {
    name: 'Mary',
    age: 28,
    position: 'HR',
    tasks: ['HR tasks'],
};
const myTalkyColleague = {
    name: 'John',
    age: 30,
    position: 'Programmer',
    greetBack: () => {
        console.log('Cheers!!!');
    },
};
function greetColleague(colleague) {
    console.log('Hi ' + colleague.name);
    if (colleague.greetBack) {
        colleague.greetBack();
    }
}
greetColleague(myColleague);
greetColleague(myOtherColleague); // notice type alias defined on the fly satisfies what Colleague type contains hence can be passed as parameter.
greetColleague(myTalkyColleague);
