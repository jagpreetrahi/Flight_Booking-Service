'use strict';
const {
  Model
} = require('sequelize');
const {EnumData} = require('../utils/common')
const {CANCELLED , BOOKED , PENDING , INITIATED} = EnumData.Booking_Type
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init({
    flightId: {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    totalCost:{
      type : DataTypes.INTEGER,
      allowNull : false
    },
    status: {
      type : DataTypes.ENUM,
      allowNull : false,
      values : [CANCELLED , BOOKED , PENDING , INITIATED],
      defaultValue : INITIATED
    },
    userId: {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    noOfSeats: {
      type : DataTypes.INTEGER,
      allowNull : false
    },
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};