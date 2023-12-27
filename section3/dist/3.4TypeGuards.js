"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type guard: narrow down an object
// type predicate (returns T/F)
function isSalary(arg) {
    return 'amount' in arg && typeof arg.amount === 'number';
}
const correctAmt = {
    amount: 1000,
};
const incorrectAmt = {
    amount: 'incorrect',
};
function paySalary(arg) {
    if (isSalary(arg)) {
        console.log(`Paying ${arg.amount}`);
    }
    else {
        console.log(`invalid data`);
    }
}
paySalary(correctAmt);
paySalary(incorrectAmt);
