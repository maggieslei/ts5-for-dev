export {};

type CEO = 'jeff';
type Founder = 'Bill';
type CeoAndFounder = CEO & Founder; //type intersection but hover over to see NEVER

type willNeverHappen = string & number;

function neverReturns(): never {
  while (true) {}
}

function doStuff(arg: string | number) {
  if (typeof arg === 'string') {
    console.log(arg);
    return;
  }
  if (typeof arg == 'number') {
    console.log(arg);
    return;
  }
  console.log(arg); // will never happen in TS from the fn signature
}

enum Position {
  Programmer = 'Programmer',
  HR = 'HR',
  CEO = 'CEO',
  // Manager = 'Manager',    // added later to see exhaustive check in payAnnualBonus fn
}

type Employee = {
  name: string;
  salary: number;
  position: Position;
};

function payAnnualBonus(empl: Employee) {
  let bonusPercent: number = 0;
  const position = empl.position;
  switch (position) {
    case Position.Programmer:
      bonusPercent: 0.2;
      break;
    case Position.HR:
      bonusPercent: 0.8;
      break;
    case Position.CEO:
      bonusPercent: 200;
      break;
    default:
      // exhaustive enum (checking)
      const remainingValues: never = position; // uncomment Manager enum to see TS compilation error of position cannot be assign to never since case Manager is not cover yet
      break;
  }
}

// Review Section 3 quiz!
