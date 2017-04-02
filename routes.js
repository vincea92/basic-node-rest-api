'use strict';

var express = require("express");
var router = express.Router();

//GET /users/vince
router.get("/players/iginla", function(req, res){
    res.json({
      name: "Jarome Iginla",
      goals: "27",
      assists: "65",
      points: "92",
      team: "Calgary Flames",
      position: "Right Wing"
    });
});

module.exports = router;
