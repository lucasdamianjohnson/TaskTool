import { Observable } from "../Util/Observer.js";
import { Project } from "./Project.js";

const ProjectObservers = {
  projectSet: new Observable(),
  projectSaved: new Observable(),
};

export const ProjectManager = {
  project: null,
  observers: ProjectObservers,
  newProject() {
    this.project = new Project();
    ProjectObservers.projectSet.notify(this.project);
  },
  loadProject(data) {
    this.project = new Project();
    this.project.fromJSON(data);
    ProjectObservers.projectSet.notify(this.project);
  },
  saveProject() {
    return this.project.toJSON();
  },
};
