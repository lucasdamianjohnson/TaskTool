import { Task as TaskObject } from "../../Projects/Task.js";
/**
 * Creates a styled HTML button element with text and click behavior.
 *
 * @param {Object} props - The properties for the task.
 * @param {TaskObject} props.task - The text to display on the button.
 * @returns {HTMLDivElement} The created button element.
 */
export default function Task(props) {
  const container = document.createElement("div");

  container.className = "task";
  const taskText = document.createElement("div");
  taskText.className = "task-text";
  const text = document.createElement("p");
  text.innerText = props.task.name;
  taskText.append(text);
  container.append(taskText);

  const taskControl = document.createElement("div");
  taskControl.className = "task-control";
  const done = document.createElement("input");
  done.className = "input";
  done.type = "checkbox";
  done.checked = props.task.done;
  done.onchange = () => {
    props.task.done = Boolean(done.checked);
  };

  taskControl.append(done);
  container.append(taskControl);
  return container;
}
