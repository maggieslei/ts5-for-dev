"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function neverReturns() {
    while (true) { }
}
function doStuff(arg) {
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
var Position;
(function (Position) {
    Position["Programmer"] = "Programmer";
    Position["HR"] = "HR";
    Position["CEO"] = "CEO";
    // Manager = 'Manager',    // added later to see exhaustive check in payAnnualBonus fn
})(Position || (Position = {}));
function payAnnualBonus(empl) {
    let bonusPercent = 0;
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
            const remainingValues = position; // uncomment Manager enum to see TS compilation error of position cannot be assign to never since case Manager is not cover yet
            break;
    }
}
// Review Section 3 quiz!
