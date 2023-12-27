export {}; // this line makes the file a module so that variable names can be reused independently.

// const duties: string[] = ['write code'];
const duties: Array<string> = ['write code'];

duties.push('fix bugs');

duties.map((duty) => {
  console.log(duty.toUpperCase());
});

// Tuples [fixed length arrays]
let employeeLockerCode: [string, number] = ['John', 345]; // Tuples work here
employeeLockerCode = ['5', 6]; // and here but
employeeLockerCode.push(12); // does not prevent this line for Tuples
console.log(employeeLockerCode);
