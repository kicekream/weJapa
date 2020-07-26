const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
        "Hello World, Welcome to WeJapa Internships"
    );
    res.end();
  } else if (url === "/" && method === "POST") {
    res.writeHead(200, { "Content-Type": "application/json" });
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const {name} = postBody = JSON.parse(body);
//      const response = [{ text: "user added" }, name];
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(`Hello ${name}, Welcome to WeJapa Internships`);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("URL Not Found");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});