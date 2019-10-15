var db = require("../models");
module.exports = function(app) {
  app.get("/api/city", function(req, res) {
    db.City.findAll({
    }).then(function(dbCity) {
      res.json(dbCity);
    });
  });
  app.get("/api/city/:id", function(req, res) {
    db.City.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Artist]
    }).then(function(dbCity) {
      res.json(dbCity);
    });
  });
};