const joi = require("joi");

module.exports = {
  registerSchema: joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    phone: joi.string().min(9).max(12).required(),
    password: joi.string().min(6).max(24),
  }),
  loginSchema: joi.object({
    phone: joi.string().min(9).max(12).required(),
    password: joi.string().min(6).max(24),
  }),
  idSchema: joi.object({
    id: joi
      .string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required(),
  }),
};
