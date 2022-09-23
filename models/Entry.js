const mongoose = require("mongoose");

const EntrySchema = new mongoose.Schema(
	{
		summary: {
			type: String,
			required: true,
		},
		date: {
			type: Date,
			required: true,
		},
		userId: {
			type: String,
			required: true,
		},
		cause: {
			type: String,
			required: true,
		},
		action: {
			type: String,
			required: true,
		},
		result: {
			type: String,
			required: true,
		},
		learned: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Entry", EntrySchema);
