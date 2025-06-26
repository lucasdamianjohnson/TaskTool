import Project from "./Components/Project/Project.js";
import Toolbar from "./Components/Toolbar/Toolbar.js";
import { JSONFileAPI } from "./Util/JSONFileAPI.js";

function InitApp() {
  JSONFileAPI.init();
  const appRoot = document.body;

  const toolBar = Toolbar();
  appRoot.append(toolBar);

  const project = Project();
  appRoot.append(project);
}

document.addEventListener("DOMContentLoaded", InitApp);
