type bonusPercent = 10 | 20 | 30;

type Salary = {
  amount: number;
  currency: 'USD' | 'EUR';
  yearlyBonus?: bonusPercent;
};

type Employee = {
  name: string;
  salary: Salary;
};

const JohnSalary: Salary = {
  amount: 60000,
  currency: 'USD',
  yearlyBonus: 10,
};

const john: Employee = {
  name: 'John',
  salary: {
    amount: 600000,
    currency: 'USD',
  },
};

function paySalary(empl: Employee, extraWork?: string) {
  console.log(
    `Payed ${empl.salary.amount} ${empl.salary.currency} to ${empl.name}`
  );
  if (empl.salary.yearlyBonus) {
    console.log(`${empl.name} received a bonus of ${empl.salary.yearlyBonus}`);
  }
  if (extraWork) {
    console.log(
      `${empl.name} received an EXTRA bonus because of hard work in ${extraWork}`
    );
  }
}

paySalary(john);
// if function signature function paySalary(empl: Employee, extraWork: string | undefined) {
// Error expected 2 args but received 1
// must call paySalary(john, undefined);
paySalary(john, 'Code Reviews');
