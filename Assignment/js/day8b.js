const fs = require("fs");

fs.writeFile("log.txt", "This was written using fs.writeFile\n", (err) => {
    if (err) throw err;
});