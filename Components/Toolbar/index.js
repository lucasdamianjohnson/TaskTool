import ProjectButtons from "./ProjectButtons.js";
import ProjectTitle from "./ProjectTitle.js";
import TaskButtons from "./TaskButtons.js";

export default function () {
  const container = document.createElement("div");
  container.className = "toolbar";
  container.append(ProjectButtons(), ProjectTitle(), TaskButtons());
  return container;
}
