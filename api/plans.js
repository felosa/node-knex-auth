const express = require("express");

const router = express.Router();

const queries = require("../db/planqueries");

function validPlan(plan) {
  const hasName = typeof plan.name == "string" && plan.name.trim() != "";
  return hasName;
}

router.get("/", (req, res) => {
  queries.getAll().then(plans => {
    res.json(plans);
  });
});

router.get("/:id", (req, res) => {
  queries.getOne(req.params.id).then(plan => {
    res.json(plan);
  });
});

router.get("/plansTrip/:tripId", (req, res) => {
  queries.getTripPlans(req.params.tripId).then(plans => {
    res.json(plans);
  });
});

router.post("/", (req, res, next) => {
  if (validPlan(req.body)) {
    queries.create(req.body).then(plan => {
      res.json(plan[0]);
    });
  } else {
    next(new Error("Invalid plan"));
  }
});

router.put("/:id", (req, res, next) => {
  queries.update(req.params.id, req.body).then(plan => {
    res.json(plan[0]);
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
