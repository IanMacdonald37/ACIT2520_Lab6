/*
 * Project: Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 *
 * Created Date: Oct 15
 * Author: Ian Macdonald
 *
 */

const unzipper = require("unzipper"),
  fs = require("fs"),
  PNG = require("pngjs").PNG,
  path = require("path");

/**
 * Description: decompress file from given pathIn, write to given pathOut
 *
 * @param {string} pathIn
 * @param {string} pathOut
 * @return {promise}
 */
const unzip = (pathIn, pathOut) => {
  return new Promise((res, rej) => {
    fs.createReadStream(pathIn)
    .on('error', (err) => {rej(err)})
    .pipe(unzipper.Extract({ path: pathOut}))
    .on('end', res())
  })
  
};

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path
 *
 * @param {string} path
 * @return {promise}
 */
const readDir = (dir) => {
  return new promise ((res, rej) => {
    fs.readdir(dir,/*withFileType: true,*/ (err, files) => {
      if(err){
        rej(err)
      }else{
        res(files)
      }
    })
  })
};

/**
 * Description: Read in png file by given pathIn,
 * convert to grayscale and write to given pathOut
 *
 * @param {string} filePath
 * @param {string} pathProcessed
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {
  return makeGray = new Promise((res, rej) => {
    transform = new PNG({})
    fs.createReadStream(pathIn)
    .on('error', (err) => {rej(err)})
    .pipe(transform)
    .on("parsed", function () {
      for (var y = 0; y < this.height; y++) {
        for (var x = 0; x < this.width; x++) {
          var idx = (this.width * y + x) << 2;

          // make gray
          this.data[idx], this.data[idx + 1], this.data[idx + 2] = 
          (this.data[idx]+this.data[idx + 1]+this.data[idx + 2])/3;
        }
      }

      this.pack().pipe(fs.createWriteStream(pathOut))
      .on('finish', () => {res()})
      .on('error', () => {rej(err)});

    });
  });
};

module.exports = {
  unzip,
  readDir,
  grayScale,
};
