const fileSystem = require("fs/promises");

fileSystem
  .readFile("todo.txt", "utf8")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
