"use strict";
var Project = /** @class */ (function () {
    function Project(name, budget) {
        this.name = name;
        this.budget = budget;
    }
    Project.prototype.printBudget = function () {
        console.log("".concat(this.name, " has a budget of ").concat(this.budget));
    };
    return Project;
}());
var coolProject = new Project('CoolProject', 10000);
coolProject.printBudget();
// change the target value inside tsconfig.json to ES5 and observe the generated .js file to see how JS classes are implemented with wrapper fn.
