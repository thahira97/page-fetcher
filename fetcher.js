const client = require("request");
const inputs = process.argv.slice(2);
const fs = require("fs");

client.get(inputs[0], (error, response, body) => {
  console.log("error:", error);
  console.log("statusCode:", response && response.statusCode);
  console.log("body:", body);

  fs.writeFile(inputs[1], body, err=> {
    if (err) {
      console.error(err);
    }

    const length = body.length;
    console.log(`Downloaded and saved ${length} bytes to ${inputs[1]}`);
  });
});
