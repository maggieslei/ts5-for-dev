type SimpleJob = {
  codingLanguage: string;
  sourceControl: string;
};

type ComplicatedJob = {
  codingLanguage: string;
  sourceControl: string;
  hasManyMeetings: true;
  reportsToBeCompleted: string[];
};

type QaJob = {
  scriptingLanguage: string;
  hasAutomatedTests: true;
};

let simpleJob: SimpleJob = {
  codingLanguage: 'TS',
  sourceControl: 'git',
};

let complicatedJob: ComplicatedJob = {
  codingLanguage: 'TS',
  sourceControl: 'git',
  hasManyMeetings: true,
  reportsToBeCompleted: ['hourly', 'daily', 'weekly'],
};

let qaJob: QaJob = {
  scriptingLanguage: 'Python',
  hasAutomatedTests: true,
};

// allowed
simpleJob = complicatedJob;

// disallowed unless force with as  // type assertion(s)
complicatedJob = simpleJob as ComplicatedJob; // simple type assertion
complicatedJob = qaJob as unknown as ComplicatedJob; // double type assertion

// same meaning, different syntax. Note: similarity in Java and C# Type Casting, but different since type assertion happens in compile time and Type Casting is run-time
complicatedJob = <ComplicatedJob>simpleJob;
complicatedJob = <ComplicatedJob>(<unknown>qaJob);

// usage: build objects in steps:
// advantage: autocomplete assistance
// disadvantage: the compiler won't complain about incomplete objects
const complicatedJobMadeInSteps = {} as ComplicatedJob; // {} sub-type of ComplicatedJob
complicatedJobMadeInSteps.codingLanguage = 'C#';
complicatedJobMadeInSteps.hasManyMeetings = true;
complicatedJobMadeInSteps.reportsToBeCompleted = [];
complicatedJobMadeInSteps.sourceControl = 'git';
