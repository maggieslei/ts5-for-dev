export {};

class Project {
  // private name: string;
  // budget: number;

  // constructor(name: string, budget: number) {
  //   this.name = name;
  //   this.budget = budget;
  // }

  // can include access modifier within constructor instead
  constructor(private name: string, public budget: number) {
    this.name = name;
    this.budget = budget;
  }

  printBudget() {
    console.log(`${this.name} had a budget of ${this.budget}`);
  }
}

const coolProject = new Project('CoolProject', 90000);
coolProject.name = 'UpdatedName'; // changed from public then cannot access name here
(coolProject as any).name = 'UpdatedName'; // cast as any will turn of TS check and voids the private modifier
coolProject.printBudget();
