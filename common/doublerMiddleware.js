// custom middleware
function doubler(req, res, next) {
    const value = req.query.number || 0;
    if (value) {
      req.double = value * 2;
      next();
    } else {
      res.status(400).send("please provide a number");
    }
  }

  module.exports = doubler;