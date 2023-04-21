const filesystem = require("fs");

filesystem.readFile("input.txt", "utf8", (error, data) => {
  filesystem.writeFile("output.txt", data, () => {});
});
