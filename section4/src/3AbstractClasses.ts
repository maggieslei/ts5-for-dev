export {};

abstract class Project {
  constructor(public name: string, public budget: number) {
    this.name = name;
    this.budget = budget;
  }

  printBudget() {
    console.log(`${this.name} has a budget of ${this.budget}`);
  }

  abstract makeDelivery(): void;
}

// abstract classes can NOT be instantiated
const coolProject = new Project('CoolProject', 10000);

class AIProject extends Project {
  override makeDelivery(): void {}
}

const aiProject = new AIProject('AiProject', 70000);

// Why abstract classes?
// Share common behavior
// Tight coupling vs Loose coupling (interfaces)
