const fileSystem = require("fs");

fileSystem.readFile("todo.txt", "utf8", (error, data) => {
  if (error) console.error(error.message);
  else console.log(data);
});
