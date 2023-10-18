const path = require("path");
/*
 * Project: Milestone 1
 * File Name: main.js
 * Description:
 *
 * Created Date:
 * Author:
 *
 */

const IOhandler = require("./IOhandler");
const { readdir } = require("fs");
const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");


zipProm = IOhandler.unzip(zipFilePath, pathUnzipped)
zipProm.then(IOhandler.readdir(pathUnzipped).then( value = {
    Promise.all([IOhandler.grayScale(value[0]), IOhandler.grayScale(value[1]), IOhandler.grayScale(value[2])]).then(
        console.log("gray filtering complete")
    )
})
)
