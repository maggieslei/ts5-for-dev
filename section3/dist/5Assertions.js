"use strict";
let simpleJob = {
    codingLanguage: 'TS',
    sourceControl: 'git',
};
let complicatedJob = {
    codingLanguage: 'TS',
    sourceControl: 'git',
    hasManyMeetings: true,
    reportsToBeCompleted: ['hourly', 'daily', 'weekly'],
};
let qaJob = {
    scriptingLanguage: 'Python',
    hasAutomatedTests: true,
};
// allowed
simpleJob = complicatedJob;
// disallowed unless force with as  // type assertion(s)
complicatedJob = simpleJob; // simple type assertion
complicatedJob = qaJob; // double type assertion
// same meaning, different syntax. Note: similarity in Java and C# Type Casting, but different since type assertion happens in compile time and Type Casting is run-time
complicatedJob = simpleJob;
complicatedJob = qaJob;
// usage: build objects in steps:
// advantage: autocomplete assistance
// disadvantage: the compiler won't complain about incomplete objects
const complicatedJobMadeInSteps = {}; // {} sub-type of ComplicatedJob
complicatedJobMadeInSteps.codingLanguage = 'C#';
complicatedJobMadeInSteps.hasManyMeetings = true;
complicatedJobMadeInSteps.reportsToBeCompleted = [];
complicatedJobMadeInSteps.sourceControl = 'git';
