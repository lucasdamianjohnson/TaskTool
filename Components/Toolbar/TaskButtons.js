import { ProjectManager } from "../../Projects/ProjectManager.js";
import Button from "../Button.js";

export default function TaskButtons() {
  const container = document.createElement("div");
  container.classList.add("button-container");
  const text = document.createElement("p");
  text.innerText = "Task";

  const input = document.createElement("input");
  input.className = "input";
  let inputText = "";
  input.onchange = () => {
    inputText = input.value;
  };
  container.append(
    text,
    input,
    Button({
      text: "Add",
      onClick() {
        ProjectManager.project.addTask(inputText);
      },
      className: "",
    })
  );
  return container;
}
