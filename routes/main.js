const express = require("express");
const { dashboard, login } = require("../controller/main");
const router = express.Router();

router.route("/dashboard").get(dashboard);
router.route("/login").post(login);

module.exports = router;
