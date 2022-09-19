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
		secret: [process.env.SESSION_SECRET, "cpd one two three"],
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
app.use("/tos", mainRoutes);
app.use("/privacy", mainRoutes);

app.listen(process.env.PORT || PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
