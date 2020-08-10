ABOUT PROJECT

This is weJapa Internship Project(s), to be updated as the project goes on.

week0_Task is a task about creating a Node server (GET and POST request) without any framework. Clone the repo and goto the project folder Set PROCESS.ENV.PORT or leave port 3000 open to start the server Run node "app.js" minus the quotes Testing the Endpoints, use Postman or Postwoman:
a. GET / : localhost:port/ directs you to Hello World

b. POST / : localhost:port/, input name as follows: { "name": "yourName" }
Note: Even if 100 key value pairs are sent, only name would be selected.

Any other endpoint asides the two endpoints would return an error 404.

week1_Task is about Creating a note app. The notes app should let you record notes, create new files, organize the notes into different topics using directories, reading from the directories, reading the contents of the files
Use Steps in Week0_Task to start server and Postman/Postwoman

a. GET / : localhost:port/ directs you to Hello world

b. POST / : localhost:port/create/ allows you to pass three parameters (category, title, content) as request body and the content is created and saved locally. A directory with the category name is automatically created if it does not exist

c. POST / : localhost:port/getnote allows you to pass two parameters (category, title) as request body and the content is returned.
