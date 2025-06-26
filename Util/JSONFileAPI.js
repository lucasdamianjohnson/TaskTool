export const JSONFileAPI = {
  /**
   * Initializes file input element for uploading JSON.
   * @private
   */
  _input: null,

  /**
   * Initializes the file input element.
   * Must be called before using uploadJSON.
   */
  init() {
    if (this._input) return;
    this._input = document.createElement("input");
    this._input.type = "file";
    this._input.accept = ".json,application/json";
    this._input.style.display = "none";
    document.body.appendChild(this._input);
  },

  /**
   * Prompts the user to upload a JSON file and returns the parsed object.
   * @returns {Promise<any>} Resolves with parsed JSON object.
   */
  async uploadJSON() {
    if (!this._input) throw new Error("Call JSONFileAPI.init() first");

    return new Promise((resolve, reject) => {
      this._input.onchange = () => {
        const file = this._input.files[0];
        if (!file) return reject("No file selected");

        const reader = new FileReader();
        reader.onload = () => {
          try {
            const json = JSON.parse(reader.result);
            resolve(json);
          } catch (err) {
            reject("Invalid JSON");
          }
        };
        reader.onerror = reject;
        reader.readAsText(file);
      };
      this._input.click();
    });
  },

  /**
   * Triggers download of a given object as a JSON file.
   * @param {string} filename - The file name to use.
   * @param {any} obj - The JSON-serializable object to download.
   */
  downloadJSON(filename, obj) {
    const jsonString = JSON.stringify(obj, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename.endsWith(".json") ? filename : filename + ".json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },
};
