import { Sequelize } from "sequelize";

const connect = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "root",
  database: "whats_2",
  port: 3306,
});

async function testConnection() {
  try {
    await connect.authenticate();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
}

export { connect, testConnection };
