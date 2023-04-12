const userRouter = require("express").Router();
const userController = require("../Controlllers/users");
const { validBody, validId } = require("../Libray/vaild");
const { registerSchema, loginSchema, idSchema } = require("../Libray/Schema");

userRouter.get("/", userController.getUser);
userRouter.post(
  "/register",
  validBody(registerSchema),
  userController.Register
);
userRouter.post("/login", validBody(loginSchema), userController.Login);
userRouter
  .route("/:id")
  .get(validId(idSchema, "id"), userController.oneUser)
  .patch(validId(idSchema, "id"), userController.editUser)
  .delete(validId(idSchema, "id"), userController.dropUser);

module.exports = userRouter;
