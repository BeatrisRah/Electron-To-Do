import osUtils from 'os-utils'

export function pollResources(){
    setInterval(async () => {
        const cpuUsage = await getCpuSage()
        const ramUSage = getRamUsage()
        console.log({cpuUsage, ramUSage});
        
    }, 500)
}

function getCpuSage(){
    return new Promise((resolve) => {
        osUtils.cpuUsage(resolve);
    })
}

function getRamUsage(){
    return 1 - osUtils.freememPercentage();
}