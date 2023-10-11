import cors from "cors"
import express from "express"
import connection from "./db/Connections.js"; 
import books from "./Routes/books.js"
import user  from "./Routes/users.js";
import Dashboard from "./Routes/Dashboard.js"

 
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors({ origin: "http://localhost:3001" }))

app.use(cors({
    "origin": "https://book-app-alxy.onrender.com",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
   })); 

app.use( user);
app.use( books);
app.use(Dashboard)

  

connection.then(() => {
    app.listen(8080, () => {
        console.log("server started at port 8080");
    });
})
