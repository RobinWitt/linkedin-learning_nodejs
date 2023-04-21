const fileSystem = require("fs");
const { Transform } = require("stream");

class TransformUp extends Transform {
  _transform = (chunk, encoding, callback) => {
    this.push(chunk.toString().toUpperCase());
    callback();
    console.log("transformed");
  };
}

const read = fileSystem.createReadStream("input.txt");
const write = fileSystem.createWriteStream("output.txt");

const trans = new TransformUp();

read.pipe(trans).pipe(write);
