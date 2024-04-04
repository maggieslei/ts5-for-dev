export {};

interface HRManager {
  getAllSalaries(): string[];
}

interface ScrumMaster {
  holdScrumMeetings(): void; // change to Object and hold cmd click to see on the fly documentation
}

class SwissArmyKnife implements HRManager, ScrumMaster {
  getAllSalaries(): string[] {
    return [];
  }
  holdScrumMeetings(): void {
    console.log('Holding scrum meeting...');
  }
}

class Project {
  name: string;
  budget: number;
  scrumMaster: ScrumMaster;

  constructor(name: string, budget: number, scrumMaster: ScrumMaster) {
    this.name = name;
    this.budget = budget;
    this.scrumMaster = scrumMaster;
  }

  holdProjectMeeting() {
    this.scrumMaster.holdScrumMeetings();
  }
}

const superManager = new SwissArmyKnife();
const basicManager = new Project('Basic Project', 100, superManager);

// Separation of concerns

// TS vs other languages:
// Interfaces: cannot use instanceOf on TS interfaces, only on classes
// Constructors: TS doesn't support multiple constructors
