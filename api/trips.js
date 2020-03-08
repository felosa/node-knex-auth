const express = require("express");

const router = express.Router();

const queries = require("../db/tripqueries");

function validTrip(plan) {
  const hasName = typeof plan.name == "string" && plan.name.trim() != "";
  return hasName;
}

router.get("/:userId", (req, res) => {
  queries.userTrips(req.params.userId).then(trips => {
    res.json(trips);
  });
});

router.get("/oneTrip/:idTrip", (req, res) => {
  queries.getOne(req.params.idTrip).then(trip => {
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

router.delete("/:id", (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      delete: true
    });
  });
});

module.exports = router;
