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
  deleteTask(task) {
    for(let i=0; i<this.task.length; i++) {
      if(this.task[i] == task){
        this.task.splice(i, 1);
        this.observers.taskRemoved.notify(task);
        return
      }
    }
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

