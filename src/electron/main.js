import {app, BrowserWindow} from 'electron';
import path from'path'


app.on('ready', () => {
    const mainWindow = new BrowserWindow()
    // !! USE PATH BECOUSE WINDOWS USES \
    mainWindow.loadFile(path.join(app.getAppPath() + '/dist-react/index.html'))
})