const Sequelize = require("sequelize");

// Set environment variables from env file
const result = require('dotenv').config()

console.log(result.parsed)
const sequelize = new Sequelize(
    process.env.DB_NAME || "speedtest",
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST || "localhost",
        port: parseInt(process.env.DB_PORT) || 5432,
        dialect: "postgres",
        pool: {
            max: 10,
            min: 0,
            idle: 30000
        },
        define: {
            timestamps: false
        }
    }
);

module.exports = sequelize;