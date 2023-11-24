const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

readFile("./content/subfolder/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  }
  const first = result;
  readFile("./content/subfolder/first.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/subfolder/result-sync.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log("done with task");
      }
    );
  });
});
console.log("starting task");
