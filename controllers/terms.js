module.exports = {
	getTos: (req, res) => {
		res.render("tos.ejs", {
			title: "Tos",
			user: req.user,
		});
	},

	getPrivacy: (req, res) => {
		res.render("privacy.ejs", {
			title: "Privacy",
			user: req.user,
		});
	},
};
