"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let complicatedJob = {
    codingLanguage: 'TS',
    sourceControl: 'git',
    hasManyMeetings: true,
    reportsToBeCompleted: ['hourly', 'daily', 'weekly'],
};
class ProjectManager {
    constructor() {
        this.meetingMaxLength = 60;
        this.holdMeeting = () => {
            console.log('Just holding a meeting');
        };
        this.endMeeting = () => {
            console.log('Ending the meeting');
        };
    }
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
