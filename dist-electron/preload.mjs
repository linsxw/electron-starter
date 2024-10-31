"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("electron", {
  minimize: () => electron.ipcRenderer.send("window-minimize"),
  maximize: () => electron.ipcRenderer.send("window-maximize"),
  close: () => electron.ipcRenderer.send("window-close"),
  setPosition: (x, y) => electron.ipcRenderer.send("window-position", { x, y })
});
