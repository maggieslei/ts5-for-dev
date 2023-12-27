class Engineer {
  // when field is not optional, tasks: string[];
  // error is strictPropertyInitialization: true,
  // can fix with initialize within constructor, or tasks: string[] = []; or change above config
  tasks?: string[];
}
