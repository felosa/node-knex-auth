const express = require("express");

const router = express.Router();

const queries = require("../db/userqueries");

router.get("/", (req, res) => {
  queries.getAll().then(users => {
    res.json(users);
  });
});

router.post("/signUp", (req, res) => {
  queries.create(req.body).then(user => {
    res.json("Introducido");
  });
});

router.post("/upDate/:id", (req, res) => {
  queries.updateUser(req.params.id, req.body).then(user => {
    res.json("Introducido");
  });
});

router.post("/login", (req, res, next) => {
  queries.login(req, res, next);
});

router.get("/isLoged/:token", (req, res, next) => {
  queries.isLoged(req, res, next);
});
module.exports = router;
