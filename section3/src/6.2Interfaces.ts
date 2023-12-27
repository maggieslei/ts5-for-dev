export {};

// Notice the syntax difference from type declaration
interface SimpleJob {
  codingLanguage: string;
  sourceControl: string;
}

// Recall the ability for interface to extend other interfaces in many other programming languages
interface ComplicatedJob extends SimpleJob {
  hasManyMeetings: true;
  reportsToBeCompleted: string[];
}

let complicatedJob: ComplicatedJob = {
  codingLanguage: 'TS',
  sourceControl: 'git',
  hasManyMeetings: true,
  reportsToBeCompleted: ['hourly', 'daily', 'weekly'],
};

interface MeetingHolder {
  meetingMaxLength: number;
  holdMeeting: () => void;
}

// Declaration merging
interface MeetingHolder {
  endMeeting: () => void;
}

class ProjectManager implements MeetingHolder {
  meetingMaxLength = 60;
  holdMeeting = () => {
    console.log('Just holding a meeting');
  };
  endMeeting = () => {
    console.log('Ending the meeting');
  };
}

/*

type vs interface

interfaces:
- declaration merging
- familiar syntax for devs coming from other programming languages

types: 
- literal types:
type Position = 'Programmer' | 'CEO' | 'HR'
- complex types (more coming in future topic)

*/
