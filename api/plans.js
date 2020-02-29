const express = require("express");

const router = express.Router();

const queries = require("../db/planqueries");

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error("Invalid ID"));
}

function validPlan(plan) {
  const hasName = typeof plan.name == "string" && plan.name.trim() != "";
  return hasName;
}

router.get("/", (req, res) => {
  queries.getAll().then(plans => {
    res.json(plans);
  });
});

router.get("/:id", isValidId, (req, res) => {
  queries.getOne(req.params.id).then(plan => {
    res.json(plan);
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

router.delete("/:id", isValidId, (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      delete: true
    });
  });
});

module.exports = router;
