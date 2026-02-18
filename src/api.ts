export interface Project {
  name: string;
  completedTasks: number;
  reportedBugs: number;
  loggedHours: number;
}

export async function fetchProjectMetrics(): Promise<Project[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: 'Dashboard Project',
          completedTasks: 24,
          reportedBugs: 3,
          loggedHours: 120
        },
        {
          name: 'Mobile App',
          completedTasks: 18,
          reportedBugs: 5,
          loggedHours: 95
        },
        {
          name: 'API Gateway',
          completedTasks: 32,
          reportedBugs: 1,
          loggedHours: 150
        },
        {
          name: 'Documentation Site',
          completedTasks: 12,
          reportedBugs: 2,
          loggedHours: 45
        }
      ]);
    }, 1000);
  });
}