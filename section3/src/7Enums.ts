export {};

// enum: a group of constants
enum Position {
  Programmer = 'Programmer',
  HR = 'HR',
  Manager = 'Manager',
  /**
   * Must receive at lease 2000% yearly bonus
   */
  CEO = 'CEO',
}

type Employee = {
  name: string;
  salary: number;
  position: Position;
};

// Enums still exist after compile time but types are gone
// Take a look at the compiled code for this file and see how enums are implemented in JS

function payBonus(empl: Employee) {
  // Pay CEO bonus:
  if (empl.position === Position.CEO) {
    // don't do === 2 hover over Position.CEO to see the comment
  }
}

/**
 * CEO bonus: ...
 * Programmer bonus: ...
 */
type PositionType = 'Programmer' | 'HR' | 'CEO';

// Problematic implementation forgetting manager (how to fix in never lecture)
function payAnnualBonus(empl: Employee) {
  let bonusPercent: number = 0;
  switch (empl.position) {
    case Position.Programmer:
      bonusPercent = 0.2;
      break;
    case Position.HR:
      bonusPercent = 0.8;
      break;
    case Position.CEO:
      bonusPercent = 200;
      break;
    default:
      break;
  }
  console.log(`Paying ${empl.salary * bonusPercent} as bonus to ${empl.name}`);
}
