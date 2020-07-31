'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // buat jaga2 CRUD di controller
      // Stock.belongsTo(models.Warehouse, {foreignKey: "WarehouseId", targetKey: "id"});
      // Stock.belongsTo(models.Product, {foreignKey: "EmployeeId", targetKey: "id"});
    }
  };
  Stock.init({
    WarehouseId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stock',
  });
  return Stock;
};