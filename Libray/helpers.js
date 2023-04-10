const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports = {
  helper: (res, message = "", results = []) => {
    res.json({
      con: true,
      message,
      results,
    });
  },
  encodePassword: (password) => bcrypt.hashSync(password),
  checkPassword: (plainPassword, password) =>
    bcrypt.compareSync(plainPassword, password),
  token: (payload) =>
    jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "4h" }),
};
