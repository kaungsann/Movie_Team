const userDB = require("../Models/userDB");
const {
  helper,
  encodePassword,
  checkPassword,
  token,
} = require("../Libray/helpers");

const getUser = async (req, res, next) => {
  let results = await userDB.find();
  helper(res, "all get userdata ", results);
};
const Register = async (req, res, next) => {
  let userName = await userDB.findOne({ name: req.body.name });
  if (userName) {
    next(new Error("This name is already in use"));
    return;
  }
  let userEmail = await userDB.findOne({ email: req.body.email });
  if (userEmail) {
    next(new Error("Email is already in use"));
    return;
  }
  let userPhone = await userDB.findOne({ phone: req.body.phone });
  if (userPhone) {
    next(new Error("Phone is already in use"));
    return;
  }
  req.body.password = encodePassword(req.body.password);
  let results = await new userDB(req.body).save();
  helper(res, "user register", results);
};
const Login = async (req, res, next) => {
  let userPhone = await userDB.findOne({ phone: req.body.phone });
  if (userPhone) {
    let user = checkPassword(req.body.password, userPhone.password);
    if (user) {
      let trueUser = userPhone.toObject();
      delete trueUser.password;
      trueUser.token = token(trueUser);
      helper(res, "login successful", trueUser);
    } else {
      next(new Error("Something is wrong with your password, pls try again"));
    }
  } else {
    next(new Error("You need to first register"));
  }
};
const oneUser = async (req, res, next) => {
  let findId = await userDB.findById(req.params.id);
  if (findId) {
    helper(res, "get one user", findId);
  } else {
    next(new Error("There is no with that id"));
  }
};
const editUser = async (req, res, next) => {
  let findId = await userDB.findById(req.params.id);
  if (findId) {
    await userDB.findByIdAndUpdate(findId._id, req.body);
    let results = await userDB.findById(findId._id);
    helper(res, " edit user info", results);
  } else {
    next(new Error("There is no with that id"));
  }
};
const dropUser = async (req, res, next) => {
  let findId = await userDB.findById(req.params.id);
  if (findId) {
    await userDB.findByIdAndDelete(findId._id);
    helper(res, "deleted user info");
  } else {
    next(new Error("There is no with that id"));
  }
};

module.exports = {
  getUser,
  Register,
  Login,
  oneUser,
  editUser,
  dropUser,
};
