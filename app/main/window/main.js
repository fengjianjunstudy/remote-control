const {app,BrowserWindow,ipcMain} = require('electron')
let win;
function create(){
    win = new BrowserWindow({
        width:1024,
        height:576,
        webPreferences:{nodeIntegration:true},
    })
    const isDev = require('electron-is-dev');

    if (isDev) {
        win.loadURL('http://localhost:3000')
    } else {
        console.log('Running in production');
    }
}
function send(channel,...args){
    console.log(channel)
    win.webContents.send(channel, ...args)
}
module.exports = {create,send}