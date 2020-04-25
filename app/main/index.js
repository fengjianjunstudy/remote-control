const {app,BrowserWindow,ipcMain} = require('electron')
const handleIPC = require('./ipc')
const {create:createMainWindow} = require('./window/main')

let win;

app.on('ready',()=>{
    createMainWindow()
    handleIPC()
})