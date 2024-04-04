"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// enum: a group of constants
var Position;
(function (Position) {
    Position["Programmer"] = "Programmer";
    Position["HR"] = "HR";
    Position["Manager"] = "Manager";
    /**
     * Must receive at lease 2000% yearly bonus
     */
    Position["CEO"] = "CEO";
})(Position || (Position = {}));
// Enums still exist after compile time but types are gone
// Take a look at the compiled code for this file and see how enums are implemented in JS
function payBonus(empl) {
    // Pay CEO bonus:
    if (empl.position === Position.CEO) {
        // don't do === 2 hover over Position.CEO to see the comment
    }
}
// Problematic implementation forgetting manager (how to fix in never lecture)
function payAnnualBonus(empl) {
    let bonusPercent = 0;
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
