'use strict';

const fs = require('fs')


module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = JSON.parse(fs.readFileSync("./data/warehouses-data.json", "utf-8"))

    data.map(item => {
      item.createdAt = new Date()
      item.updatedAt = new Date()
    })

    return queryInterface.bulkInsert('Warehouses', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Warehouses', null, {});
  }
};
