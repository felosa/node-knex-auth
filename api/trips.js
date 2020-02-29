const express = require("express");

const router = express.Router();

const queries = require("../db/tripqueries");

router.get("/", (req, res) => {
  queries.getAll().then(trips => {
    res.json(trips);
  });
});

module.exports = router;
