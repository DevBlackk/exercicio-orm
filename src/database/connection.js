import { Sequelize } from "sequelize";

const connect = new Sequelize({
  dialect: 'mysql',
  port: '3306',
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: 'teste'
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
