// Import methods to save and get data from the indexedDB database in './database.js'
import { getDb, putDb } from "./database";
import { header } from "./header";

export default class {
  constructor() {
    // Load content from localStorage or initialize it as an empty string
    const localData = localStorage.getItem("content") || "";

    // Check if CodeMirror is loaded, throw an error if it's not
    if (typeof CodeMirror === "undefined") {
      throw new Error("CodeMirror is not loaded");
    }

    // Create a CodeMirror editor instance in the #main element
    this.editor = CodeMirror(document.querySelector("#main"), {
      value: header, // Initialize the editor content with 'header'
      mode: "javascript", // Set the editor mode to JavaScript
      theme: "monokai", // Apply the 'monokai' theme
      lineNumbers: true, // Show line numbers
      lineWrapping: true, // Allow line wrapping
      autofocus: true, // Automatically focus on the editor
      indentUnit: 2, // Set the indentation unit to 2 spaces
      tabSize: 2, // Set the tab size to 2 spaces
    });

    // When the editor is ready, set the value to whatever is stored in indexeddb.
    // Fall back to localStorage if nothing is stored in indexeddb, and if neither is available, set the value to header.
    getDb().then((data) => {
      console.info("Loaded data from IndexedDB, injecting into editor");
      this.editor.setValue(data[data.length] || localData || header);
    });

    // Save the content of the editor to localStorage when changes occur
    this.editor.on("change", () => {
      localStorage.setItem("content", this.editor.getValue());
    });

    // Save the content of the editor when the editor itself is loses focus
    this.editor.on("blur", () => {
      console.log("The editor has lost focus");
      putDb(localStorage.getItem("content"));
    });
  }
}
