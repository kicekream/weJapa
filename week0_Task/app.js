const http = require("http");
const fs = require("fs").promises;
const path = require("path");

const port = process.env.PORT || 3000;

const server = http.createServer( (req, res) => {
  const { url, method } = req;

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write("Hello World, Welcome to WeJapa Internships");
    res.end();
  } else if (url === "/" && method === "POST") {
    res.writeHead(200, { "Content-Type": "application/json" });
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", async() => {
      const { name } = (postBody = JSON.parse(body));
      //      const response = [{ text: "user added" }, name];
      //SRTERGTDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDE
      const note = {
        genre: "best",
      };
      const dir = __dirname + `/${note.genre}`;
      console.log(dir);

      try {
        await fs.mkdir(dir, { recursive: true }); //Calling fs.mkdir() when path is a directory that exists results in an error only when recursive is false.
        console.log("directory created")

        await fs.writeFile("best/file1.json", name); // need to be in an async function
        console.log("file written")
      } catch (error) {
        console.log(error);
      }

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(`Hello ${name}, Welcome to WeJapa Internships`);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("URL Not Found");
    res.end;
  }
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
