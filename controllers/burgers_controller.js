const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.post("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("controller " + condition);
  burger.update({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
