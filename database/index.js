const fs = require('fs');
const path = require('path')

module.exports = {
    loadData : (filenameJSON = "productos") => {
        const pathJSON = path.join(__dirname, `./${filenameJSON}.json` );
        const dataJSON = fs.readFileSync(pathJSON, 'utf-8');
        const dataJS = JSON.parse(dataJSON);

        return dataJS
    },

    saveData:(data, filanemeJSON) => {
        const pathJSON = path.join(__dirname, `./${filenameJSON}.json`);
        const dataString = JSON.stringify(data, null, 3)
        fs.writeFileSync = (pathJSON , data , 'utf-8')
    }
}