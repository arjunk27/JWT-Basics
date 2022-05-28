const express = require("express");
const { dashboard, login } = require("../controller/main");
const router = express.Router();

// const authMiddleware = require("../middleware/auth");

router.route("/dashboard").get(dashboard);
router.route("/login").post(login);

module.exports = router;
