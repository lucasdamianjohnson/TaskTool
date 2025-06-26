import Project from "./Components/Project/index.js";
import Toolbar from "./Components/Toolbar/index.js";
import { JSONFileAPI } from "./Util/JSONFileAPI.js";

function InitApp() {
  JSONFileAPI.init();
  const appRoot = document.body;
  appRoot.append(Toolbar(), Project());
}

document.addEventListener("DOMContentLoaded", InitApp);
