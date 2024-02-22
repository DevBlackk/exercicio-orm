import { connect } from "../database/connection.js";
import { DataTypes, Sequelize } from "sequelize";

export const User = connect.define("User", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  relationship: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});