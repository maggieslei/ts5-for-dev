"use strict";
let bestProgrammer = 'Programmer';
function getSalaryForPosition(position) {
    if (position === 'Programmer') {
        bestProgrammer = position;
        return 100000;
    }
    if (position === 'HR') {
        return 120000;
    }
    // type narrowing hover over position warn line
    console.warn(`We don't have a salary for ${position}`);
}
