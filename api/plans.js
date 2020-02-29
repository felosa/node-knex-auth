const express = require("express");

const router = express.Router();

const queries = require("../db/planqueries");

router.get("/", (req, res) => {
  queries.getAll().then(plans => {
    res.json(plans);
  });
});

module.exports = router;
