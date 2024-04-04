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
        // TS class can implement a type like an interface
        this.meetingMaxLength = 60;
        this.holdMeeting = () => {
            console.log('Just holding a meeting');
        };
    }
}
