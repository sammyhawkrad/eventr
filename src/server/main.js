import express from "express";
import ViteExpress from "vite-express";
import data from "./db.json" assert {type: 'json'}

const app = express();
const {events} = data

app.get("/hello", (req, res) => {
  res.send("Hello Vite + Vue!");
});

app.get('/events-data', (req, res) => {
  res.send(events)
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
