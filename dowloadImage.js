//dowloadImage.js
const Axios = require('axios')
const Fs = require('fs')
const Path = require('path')

module.exports = async function dowloadImage (url, file_id){
    const path = Path.resolve(__dirname, 'img', `${file_id}.jpg`)
    const writer = Fs.createWriteStream(path)
    const response  = await Axios({
        url,
        method: 'GET',
        responseType: 'stream'
    })
 response.data.pipe(writer)

 return new Promise(() => {
     writer.on('finish', resolve)
     writer.on('error', reject)
 })
}