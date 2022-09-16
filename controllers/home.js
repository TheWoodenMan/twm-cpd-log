module.exports = {
	getIndex: (req, res) => {
		res.render("index.ejs");
	},
};

exports.getTos = (req, res) => {
	res.render("tos", {
		title: "Tos",
	});
};

exports.getPrivacy = (req, res) => {
	res.render("privacy", {
		title: "Privacy",
	});
};
