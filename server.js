// declare node.js module variables.
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("express-flash");
const logger = require("morgan");
const { clientP } = require("./config/database");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const entryRoutes = require("./routes/entries");
require("./config/passport")(passport);

// enable dotenv for secrets
require("dotenv").config({ path: "./config/.env" });
const PORT = process.env.PORT;

// mongo variables
let db,
	dbString = process.env.DB_STRING;
dbName = "entries";

// ejs and static files
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
// Sessions

connectDB();

app.use(
	session({
		secret: "cpd one two three",
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({
			client: mongoose.connection.getClient(),
			dbName: dbName,
		}),
	})
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use("/", mainRoutes);
app.use("/entries", entryRoutes);

// // This express route handles the refresh to the default login page.
// app.get("/", async (request, response) => {
// 	// This render response sends the now modified ejs to the user
// 	response.render("login.ejs", { entries: entries });
// });

// // this express route handles the authorised access to the log entries
// app.get("/entries", async (request, response) => {
// 	// This mongodb search returns all "entries" entries
// 	const entries = await db
// 		.collection("entries")
// 		.find()
// 		.sort({ "date": -1 })
// 		.toArray();

// 	// This render response sends the now modified ejs to the user
// 	response.render("entries.ejs", { entries: entries });
// });

// // This express router creates new log entries from the form
// app.post("/addEntry", (req, res) => {
// 	// create a new document in the collection "entries"
// 	db.collection("entries")
// 		.insertOne({
// 			summary: req.body.summary,
// 			date: req.body.date,
// 			cause: req.body.cause,
// 			action: req.body.action,
// 			result: req.body.result,
// 			learned: req.body.learned,
// 		})
// 		.then((result) => {
// 			console.log(`Log entry ${result.insertedId} added`);
// 			console.log("You have updated your journal.");
// 			res.redirect("/");
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// });

// app.delete("/deleteEntry", (req, res) => {
// 	db.collection("entries")
// 		.deleteOne({ summary: req.body.entryFromJS })
// 		.then((result) => {
// 			console.log(result);
// 			console.log("Log Entry Deleted");
// 			res.json("Log Entry Deleted");
// 		})
// 		.catch((err) => console.error(err));
// });

app.listen(process.env.PORT || PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
