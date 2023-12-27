"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const duties: string[] = ['write code'];
const duties = ['write code'];
duties.push('fix bugs');
duties.map((duty) => {
    console.log(duty.toUpperCase());
});
// Tuples [fixed length arrays]
let employeeLockerCode = ['John', 345]; // Tuples work here
employeeLockerCode = ['5', 6]; // and here but
employeeLockerCode.push(12); // does not prevent this line for Tuples
console.log(employeeLockerCode);
