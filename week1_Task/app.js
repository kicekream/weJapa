const http = require("http");
const fs = require("fs").promises;
const path = require("path");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write("Hello World, Welcome to WeJapa Internships");
    res.end();
  } else if (url === "/create" && method === "POST") {
    res.writeHead(200, { "Content-Type": "application/json" });
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", async () => {
      let { title, category, content } = (postBody = JSON.parse(body));

      const dir = __dirname + `/${category}`;
      console.log(dir);

      try {
        await fs.mkdir(dir, { recursive: true }); //Calling fs.mkdir() when path is a directory that exists results in an error only when recursive is false.
        console.log("directory created");

        await fs.writeFile(`${category}/${title}.json`, body); // need to be in an async function
        console.log(`${title} Note successfully created`);
      } catch (error) {
        console.log(error);
      }

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(`${title} successfully created`);
    });
  } else if (url === "/getnote" && method === "POST") {
    res.writeHead(200, { "Content-Type": "application/json" });
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", async () => {
      let { title, category } = (postBody = JSON.parse(body));

      let directory = __dirname + `/${category}/${title}.json`;
      console.log(directory);

      try {
        let dir = await fs.readFile(directory, {
          encoding: "utf-8",
        });
        dir = JSON.parse(dir);
        console.log(dir.content);
        res.writeHead(201, { "Content-Type": "application/json" });
      res.end(`${dir.content}`);
      } catch (error) {
        console.log(error);
      }
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
