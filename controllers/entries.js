const Entry = require("../models/Entry");

module.exports = {
	getEntries: async (req, res) => {
		try {
			const entryItems = await Entry.find({ userId: req.user.id }).sort({
				"date": -1,
			});
			// const itemsLeft = await Entry.countDocuments({
			// 	userId: req.user.id,
			// 	completed: false,
			// });
			// const last5 = entryItems
			// 	.sort((a, b) => b.createdAt - a.createdAt)
			// 	.filter((x, i) => i <= 4);
			// console.log({ last5 });
			res.render("entries.ejs", {
				// last5: last5,
				entries: entryItems,
				// left: itemsLeft,
				user: req.user,
			});
		} catch (err) {
			console.log(err);
		}
	},
	createEntry: async (req, res) => {
		console.log(req.body);
		try {
			await Entry.create({
				summary: req.body.summary,
				date: req.body.date,
				userId: req.user.id,
				cause: req.body.cause,
				action: req.body.action,
				result: req.body.result,
				learned: req.body.learned,
			});
			console.log(`Entry ${req.body.summary} has been added!`);
			res.redirect("/entries");
		} catch (err) {
			console.log(err);
		}
	},
	deleteEntry: async (req, res) => {
		try {
			// Find post by id
			let entry = await Entry.findById({ _id: req.params.id });
			// Delete post from db
			await Entry.remove({ _id: req.params.id });
			console.log("Deleted Entry");
			res.redirect("/entries");
		} catch (err) {
			res.redirect("/entries");
		}
	},
};
