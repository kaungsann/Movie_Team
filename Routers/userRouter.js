const userRouter = require("express").Router();
const userController = require("../Controlllers/users");
const { validBody, validId } = require("../Libray/vaild");
const { registerSchema, loginSchema } = require("../Libray/Schema");

userRouter.get("/", userController.getUser);
userRouter.post(
  "/register",
  validBody(registerSchema),
  userController.Register
);
userRouter.post("/login", validBody(loginSchema), userController.Login);
userRouter
  .route("/:id")
  .get(userController.oneUser)
  .patch(userController.editUser)
  .delete(userController.dropUser);

module.exports = userRouter;
