'use strict';
/** @type {import('sequelize-cli').Migration} */
const {EnumData} = require('../utils/common')
const {CANCELLED , BOOKED , PENDING , INITIATED} = EnumData.Booking_Type
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightId: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      totalCost: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      status: {
        type: Sequelize.ENUM,
        allowNull : false,
        values : [CANCELLED , BOOKED , PENDING , INITIATED],
        defaultValue : INITIATED
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      noOfSeats: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookings');
  }
};