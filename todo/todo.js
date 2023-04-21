const fileSystem = require("fs");

const filename = "todo.txt";

if (process.env.TODO_FILENAME !== undefined) {
  filename = process.env.TODO_FILENAME;
}
console.log("Filename: " + filename);

// ________________________________________________

const args = process.argv.slice(2);

if (args[0] === "add") {
  // save text from args[1] to file
  const fileDescriptor = fileSystem.openSync(filename, "a");
  fileSystem.writeSync(fileDescriptor, args[1] + "\n");
  fileSystem.closeSync(fileDescriptor);
}

//________________________________________________

if (args[0] === "show") {
  // show all tasks from file - Option A
  // with error handling
  try {
    const data = fileSystem.readFileSync(filename, "utf8");
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

//________________________________________________

if (args[0] === "show-buffer") {
  // show all tasks from file - Option B
  const data = Buffer.alloc(1024);

  const fileDescriptor2 = fileSystem.openSync(filename, "r");
  fileSystem.readSync(fileDescriptor2, data);
  fileSystem.closeSync(fileDescriptor2);

  console.log(data.toString());
}

//________________________________________________

if (args[0] === "show-async") {
  // async file reading
  fileSystem.readFile(filename, "utf8", (error, data) => {
    if (error) console.error(error.message);
    else console.log(data);
  });
  console.log("Todo-List");
}

//________________________________________________

if (args[0] === "add-async") {
  // save text from args[1] to file - async
  fileSystem.open(filename, "a", (error, fileDescriptor3) => {
    fileSystem.write(fileDescriptor3, args[1] + "\n", (e) => {
      if (e) console.error(e.message);
      else {
        fileSystem.close(fileDescriptor3, (e) => {
          if (e) console.error(e.message);
        });
      }
    });
  });
}
