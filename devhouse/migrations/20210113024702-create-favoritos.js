'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('favoritos', { 
      idfavoritos: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      idclientes: {
        type: Sequelize.INTEGER,
        references: {
          model: 'clientes',
          key: 'idclientes'
        }
      },
      idprodutos: {
        type: Sequelize.INTEGER,
        references: {
          model: 'produtos',
          key: 'idprodutos'
        }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('favoritos');

  }
};
