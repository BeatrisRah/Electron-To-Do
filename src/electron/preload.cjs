const electron = require('electron')

electron.contextBridge.exposeInMainWorld('electron', {
    getTasks: async () => {
        return await electron.ipcRenderer.invoke('get:tasks')
    },
    createTask: async (newTaskData) =>{
        
        return await electron.ipcRenderer.invoke('task:add', newTaskData, )
    }
})