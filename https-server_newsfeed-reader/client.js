const https = require("https");

const options = {
  hostname: "nodejs.org",
  path: "/en/feed/vulnerability.xml",
  port: 443,
  method: "GET",
};

const request = https.request(options, (response) => {
  if (response.statusCode !== 200) {
    console.error("request failed");
    return;
  }
  response.on("data", (data) => {
    console.log(data.toString());
  });
});

request.on("error", (error) => {
  console.error(error);
});
request.end();
