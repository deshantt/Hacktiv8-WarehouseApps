'use strict';

const fs = require('fs')


module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = JSON.parse(fs.readFileSync("./data/employees-data.json", "utf-8"))

    data.map(item => {
      item.createdAt = new Date()
      item.updatedAt = new Date()
    })

    return queryInterface.bulkInsert('Employees', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Employees', null, {});
  }
};
