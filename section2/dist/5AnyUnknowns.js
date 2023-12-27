"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let queryResult = 5; // disables type checking
queryResult = 'someString';
queryResult = ['an', 'array'];
function getSalaryFromExternalService(employeeId) {
    return JSON.parse('5');
}
let salary = getSalaryFromExternalService(123);
// type narrowing
if (typeof salary === 'number') {
    salary++;
}
// type narrowing
if (typeof salary === 'string') {
    salary.includes('$');
}
// type narrowing
if (typeof salary === 'string' || typeof salary === 'number') {
    salary.valueOf();
}
// type narrowing
if (salary &&
    typeof salary === 'object' &&
    'history' in salary &&
    Array.isArray(salary.history)) {
    salary.history.push(12000);
}
// When to use any?
// - start of JS to TS migration
// - inside unit tests
