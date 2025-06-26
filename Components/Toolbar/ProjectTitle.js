import { ProjectManager } from "../../Projects/ProjectManager.js";

export default function ProjectTitle() {
  const container = document.createElement("div");
  container.className = "project-title";
  const text = document.createElement("h1");
  container.append(text);
  text.innerText = "Select Project";

  ProjectManager.observers.projectSet.subscribe((project) => {
    text.innerText = project.name;
  });

  return container;
}
