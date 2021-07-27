const { DataTypes } = require('sequelize');

const sequelize = require('../util/database');

const EmployeeAddress = sequelize.define('employee_address', {
    empId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    houseName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    city: {
        type: DataTypes.STRING,
        allowNull:false
    },
    state: {
        type: DataTypes.STRING,
        allowNull:false
    },
    pincode: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    street: {
        type: DataTypes.STRING,
        allowNull:false
    },
});

module.exports = EmployeeAddress;