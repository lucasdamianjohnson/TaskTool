import { Project } from "../../Projects/Project.js";
import { ProjectManager } from "../../Projects/ProjectManager.js";
import Task from "./Task.js";
/**
 *
 * @param {Project} project - The project
 * @param {HTMLDivElement} container - The container
 */

function MountProject(project, container) {
  const taskList = document.createElement("div");
  taskList.className = "task-list";
  container.append(taskList);
  for (const task of project.task) {
    taskList.append(Task({ task }));
  }
  project.observers.taskAdded.subscribe((task) => {
    taskList.append(Task({ task }));
  });
}

export default function () {
  const container = document.createElement("div");
  container.classList.add("tasks");

  ProjectManager.observers.projectSet.subscribe((project) => {
    container.innerHTML = "";
    MountProject(project, container);
  });

  return container;
}
