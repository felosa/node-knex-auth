const express = require("express");

const router = express.Router();

const queries = require("../db/tripqueries");

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error("Invalid ID"));
}

function validTrip(plan) {
  const hasName = typeof plan.name == "string" && plan.name.trim() != "";
  return hasName;
}

router.get("/", (req, res) => {
  queries.getAll().then(trips => {
    res.json(trips);
  });
});

router.get("/:id", isValidId, (req, res) => {
  queries.getOne(req.params.id).then(trip => {
    res.json(trip);
  });
});

router.post("/", (req, res, next) => {
  if (validTrip(req.body)) {
    queries.create(req.body).then(trip => {
      res.json(trip[0]);
    });
  } else {
    next(new Error("Invalid trip"));
  }
});

router.put("/:id", (req, res, next) => {
  queries.update(req.params.id, req.body).then(trip => {
    res.json(trip[0]);
  });
});

router.delete("/:id", isValidId, (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      delete: true
    });
  });
});

module.exports = router;
