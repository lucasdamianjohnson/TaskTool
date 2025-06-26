import { Observable } from "../Util/Observer.js";
import { Task } from "./Task.js";
class ProjectObservers {
  taskAdded = new Observable();
  taskRemoved = new Observable();
}

export class Project {
  name = "";
  task = [];
  observers = new ProjectObservers();

  addTask(name) {
    const task = new Task(this);
    task.name = name;
    this.task.push(task);
    this.observers.taskAdded.notify(task);
  }
  fromJSON(data) {
    this.name = data.name;
    this.task = data.task.map((_) => {
      const task = new Task(this);
      task.fromJSON(_);
      return task;
    });
  }
  toJSON() {
    return {
      name: this.name,
      task: this.task.map((_) => _.toJSON()),
    };
  }
}
