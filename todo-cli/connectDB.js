// connectDB.js

const Sequelize = require("sequelize");

const database = "todo_db";
const username = "postgres";
const password = "12345678";
const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });