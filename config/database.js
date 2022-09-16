const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

const mOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.DB_STRING, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

module.exports = connectDB;
