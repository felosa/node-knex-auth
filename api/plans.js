const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "muestra plans"
  });
});

module.exports = router;
