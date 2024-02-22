import { connect } from "../database/connection.js";
import { User } from "../entities/User.entity.js";
import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(45).required(),
  relationship: Joi.boolean().default(false).required(),
}).messages({
  "string.min": "O nome deve conter no mínimo {#limit} caracteres",
  "string.email": "Insira um e-mail válido",
  "string.min": "A senha deve conter no mínimo {#limit} caracteres",
  "string.max": "A senha deve conter no máximo 45 caracteres",
  "any.required": "Insira uma relação"
})

export const createdUser = async (dataUser) => {
  const { error } = userSchema.validate(dataUser, {abortEarly: false})
  if (error) {
    return error.details.map(({message}) => message)
  }

  // const erros = []
  // for (const iterator in props) {
  //   if (!dataUser[iterator]) {
  //     erros.push(`Dados invalidados: ${iterator}`)
  //   }
  // }
  // if (erros.length > 0) {
  //   return erros
  // }

  await connect.sync();

  const newUser = await User.create(dataUser);

  return newUser;
};

export const getAllUsers = async () => {
  return await User.findAll();
};
