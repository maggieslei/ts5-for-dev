class Project {
  name: string;
  budget: number;

  constructor(name: string, budget: number) {
    this.name = name;
    this.budget = budget;
  }

  printBudget() {
    console.log(`${this.name} has a budget of ${this.budget}`);
  }
}

const coolProject = new Project('CoolProject', 10000);
coolProject.printBudget();

// change the target value inside tsconfig.json to ES5 and observe the generated .js file to see how JS classes are implemented with wrapper fn.
// Why some JS features are called syntactic sugar...

////////////////////////
//    Inheritance
////////////////////////
class SecretProject extends Project {
  secrecyLevel: 1 | 2 | 3;

  constructor(secrecyLevel: 1 | 2 | 3) {
    super('Secret Project', 777777);
    this.secrecyLevel = secrecyLevel;
  }

  // override keyword to prevent typo in overriding base class method
  override printBudget() {
    console.log(`${this.name} has a budget of SECRET`);
  }
}

const secretProject = new SecretProject(3);
secretProject.printBudget();
