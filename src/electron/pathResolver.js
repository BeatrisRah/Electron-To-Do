import { app } from 'electron'
import path from 'path'
import { isDev } from './utils.js'

export function getPreloadPath(){
    return path.join(
        app.getAppPath(),
        isDev() ? '.' : '..',
        '/src/electron/preload.cjs'
    )
}