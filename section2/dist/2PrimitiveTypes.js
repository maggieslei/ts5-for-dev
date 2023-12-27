"use strict";
let firstName = 'Jane';
const lastName = 'Doe'; // notice type inference doesn't happen with const via hovering for const vs let
let isAdmin = false;
let number = 35;
// error prevention   number = '30';
let duties = ['write code', 'fix bugs'];
let car = null;
let bike = undefined;
let work = () => {
    console.log('working');
};
let salary = 50n; // not available when targeting lower than ES2020.
let logo = Symbol('emerald');
let all = [firstName, isAdmin, number, duties, car, bike, work, salary, logo];
for (let item of all) {
    console.log(String(item) + ' is ' + typeof item);
}
