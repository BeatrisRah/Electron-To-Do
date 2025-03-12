const electron = require('electron')

electron.contextBridge.exposeInMainWorld('electron', {
    getTasks: async () => {
        return await electron.ipcRenderer.invoke('get:tasks')
    },
})