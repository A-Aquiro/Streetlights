import rawProjects from './projects.json';
import type { CIPProject } from '../types/project';

// project summaries are added when the data is geocoded
// export the project list used by the app
export const projects: CIPProject[] = rawProjects as CIPProject[];

export default projects;
