import {app, BrowserWindow, ipcMain} from 'electron';
import path from'path'
import { isDev } from './utils.js';
import { getPreloadPath } from './pathResolver.js';
import Store from 'electron-store'

const store = new Store()

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        webPreferences:{
            preload: getPreloadPath()
        }
    })
    if(isDev()){
        mainWindow.loadURL('http://localhost:5123')
    } else{
        mainWindow.loadFile(path.join(app.getAppPath() + '/dist-react/index.html'))
    }
    

    ipcMain.handle('get:tasks', (event) => {
        return store.get('tasks') || []
    })

    ipcMain.handle('task:add', (event, newTaskData) => {
        const tasks = store.get('tasks') || []
        tasks.push(newTaskData)
        store.set('tasks', tasks)
        return tasks;
    })
})