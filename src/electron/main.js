import {app, BrowserWindow, ipcMain} from 'electron';
import path from'path'
import { isDev } from './utils.js';
import { getPreloadPath } from './pathResolver.js';



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
        // return store.get('tasks') || []
    })

    ipcMain.handle('task:add', (event, newTaskData) => {
        // const tasks = store.get('tasks') || []
        // tasks.push(newTaskData)
        // store.set('tasks', tasks)
        
        // console.log(app.getAppPath());
        // return tasks;
    })

    ipcMain.handle('task:delete', (event, taskId) => {
        // const tasks = store.get('tasks') || []
        // const taskIndex = tasks.findIndex(el => el.id === taskId)
        
        // tasks.splice(taskIndex, 1)
        // store.set('tasks',tasks)
        // return store.get('tasks');

    })
})