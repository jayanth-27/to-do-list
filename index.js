import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "notemaking",
  password: "password",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/", async (req, res) => {
  const result=await db.query("SELECT * FROM items");
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: result.rows,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  await db.query("INSERT INTO items (title) VALUES ($1)",[item]);
  //items.push({ title: item });
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const id=req.body.updatedItemId;
  const newtitle=req.body.updatedItemTitle;
  await db.query("UPDATE items SET title=$1 WHERE id=$2",[newtitle,id]);
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const id=req.body.deleteItemId;
  await db.query("DELETE FROM items WHERE id=$1",[id]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
