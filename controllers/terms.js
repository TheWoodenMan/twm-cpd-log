module.exports = {
	getTos: (req, res) => {
		res.render("tos.ejs", {
			title: "Tos",
		});
	},

	getPrivacy: (req, res) => {
		res.render("privacy.ejs", {
			title: "Privacy",
		});
	},
};
