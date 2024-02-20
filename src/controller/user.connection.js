import { connect } from "../database/connection.js";
import { User } from "../entities/User.entity.js";

export const createdUser = async (name, email, password, relationship) => {
  await connect.sync();

  const newUser = await User.create({
    name,
    email,
    password,
    relationship,
  });

  return newUser;
};

export const getAllUsers = async () => {
  return await User.findAll();
};
