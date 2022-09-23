const express = require("express");
const router = express.Router();
const entriesController = require("../controllers/entries");
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, entriesController.getEntries);

router.post("/createEntry", ensureAuth, entriesController.createEntry);

router.delete("/deleteEntry/:id", ensureAuth, entriesController.deleteEntry);

router.post("/searchDates", ensureAuth, entriesController.searchDates);




module.exports = router;
