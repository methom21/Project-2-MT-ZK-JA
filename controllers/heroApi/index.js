const router = require("express").Router();

const heroRoutes = require("./heroRoutes");
router.use("/heros", heroRoutes);

module.exports = router;
