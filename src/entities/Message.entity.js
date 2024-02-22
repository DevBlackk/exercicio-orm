import { connect } from "../database/connection.js";
import { DataTypes, Sequelize } from "sequelize";

export const Message = connect.define("Message", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  sender_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  receiver_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});