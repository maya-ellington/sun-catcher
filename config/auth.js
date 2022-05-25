const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = function (req, res, next) {
  // Check for the token being sent in three different ways
  let token = req.get("Authorization") || req.query.token || req.body.token;
  if (token) {
    // Remove the 'Bearer ' if it was included in the token header
    console.log('found token!!!!!!!!!')
    token = token.replace("Bearer ", "");
    // Check if token is valid and not expired
    jwt.verify(token, SECRET, function (err, decoded) {
      if (err) {
        console.log(err, 'this is jwt error')
        next(err);
      } else {
        // It's a valid token, so add user to req
        req.user = decoded.user;
        console.log(req.user)
        next();
      }
    });
  } else {
    next();
  }
};
