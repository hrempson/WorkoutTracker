const router = require("express").Router();
const path = require("path");

// router.get("/"), function
router.get("*", (req,res) => {
  res.redirect("/exercise");
});

router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  module.exports = router;
