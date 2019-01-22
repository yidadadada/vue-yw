const fs = require('fs')
function getFileByPath(fpath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fpath, 'utf-8', (err, dataStr) => {
            if (err) return reject(err)
            resolve(dataStr)
        })
    })
}
async function getData() {
    const data1 = await getFileByPath('./1.txt')
    const data2 = await getFileByPath('./2.txt')
    const data3 = await getFileByPath('./3.txt')
    console.log(data1)
    console.log(data2)
    console.log(data3)
}
getData()