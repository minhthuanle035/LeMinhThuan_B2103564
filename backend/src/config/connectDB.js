const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)

const sequelize = new Sequelize('thuanle', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    port: 3307
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;