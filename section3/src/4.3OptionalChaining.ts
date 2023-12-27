type Manager = {
  team?: {
    scrumMaster?: {
      holdScrumMeetings: () => void;
    };
  };
};

function manage(manager: Manager) {
  manager.team?.scrumMaster?.holdScrumMeetings();
}
// vs.
function manageOldWayOfChecking(manager: Manager) {
  if (manager.team && manager.team.scrumMaster) {
    manager.team.scrumMaster.holdScrumMeetings();
  }
}

// ? - optional operator - JS feature
// ! - non-null assertion operator - TS feature
//  manager.team!.scrumMaster!.holdScrumMeetings(); telling compiler that these properties exist for sure.

manage({
  team: {
    scrumMaster: {
      holdScrumMeetings: () => {
        console.log('Holding e very useful scrum meeting');
      },
    },
  },
});
