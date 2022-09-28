module.exports = {
	getTos: (req, res) => {
		res.render("tos.ejs", {
			title: "ToS",
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
