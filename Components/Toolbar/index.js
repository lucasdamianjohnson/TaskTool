import ProjectButtons from "./ProjectButtons.js";
import TaskButtons from "./TaskButtons.js";

export default function () {
  const container = document.createElement("div");
  container.classList.add("toolbar");
  const projectButtons = ProjectButtons();
  container.append(projectButtons);

  const taskButtons = TaskButtons();
  container.append(taskButtons);
  return container;
}
