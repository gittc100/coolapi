// routers are mini apps

const express = require("express");

const router = express.Router();

// middleware

//end points when url begons with /products
router.get("/", (req, res) => {
    res.send(`GET /products endpoints`);
  });

  //end points when url begons with /products:id
router.get("/:id", (req, res) => {
    res.send(`GET /products/${req.params.id} endpoints`);
  });

module.exports = router;