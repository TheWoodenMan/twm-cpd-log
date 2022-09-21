module.exports = {
	getIndex: (req, res) => {
		res.render("index.ejs", {
			title: "Home",
			user: req.user,
		});
	},
};
