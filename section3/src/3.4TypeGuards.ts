export {};

type Salary = {
  amount: number;
};

// type guard: narrow down an object
// type predicate (returns T/F)
function isSalary(arg: any): arg is Salary {
  return 'amount' in arg && typeof arg.amount === 'number';
}

const correctAmt = {
  amount: 1000,
};
const incorrectAmt = {
  amount: 'incorrect',
};

function paySalary(arg: unknown) {
  if (isSalary(arg)) {
    console.log(`Paying ${arg.amount}`);
  } else {
    console.log(`invalid data`);
  }
}

paySalary(correctAmt);
paySalary(incorrectAmt);
