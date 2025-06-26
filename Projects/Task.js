import { Observable } from "../Util/Observer.js";
import { Project } from "./Project.js";

class TaskObservers {
  doneUpdated = new Observable();
}

export class Task {
  name = "";
  done = false;
  observers = new TaskObservers();
  project = null;
  constructor(project) {
    this.project = project;
  }
  fromJSON(data) {
    this.name = data.name;
    this.done = data.done;
  }
  toJSON() {
    return {
      name: this.name,
      done: this.done,
    };
  }
}
