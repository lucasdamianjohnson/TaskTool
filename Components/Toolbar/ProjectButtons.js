import { ProjectManager } from "../../Projects/ProjectManager.js";
import { JSONFileAPI } from "../../Util/JSONFileAPI.js";
import Button from "../Button.js";

export default function ProjectButtons() {
  const container = document.createElement("div");
  container.classList.add("button-container");
  const text = document.createElement("p");
  text.innerText = "Project";
  container.append(
    text,
    Button({
      text: "New",
      onClick() {
        ProjectManager.newProject();
      },
      className: "",
    }),
    Button({
      text: "Save",
      onClick() {
        const project = ProjectManager.saveProject();
        if (!project) return;
        JSONFileAPI.downloadJSON("project.json", project);
      },
      className: "",
    }),
    Button({
      text: "Load",
      async onClick() {
        const json = await JSONFileAPI.uploadJSON();
        console.warn("got project data", json);
        ProjectManager.loadProject(json);
      },
      className: "",
    })
  );
  return container;
}
