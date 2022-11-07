"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cars",
      [
        {
          marca: "Ford",
          modelo: "Range",
          cor: "Cinza",
          anoFabricacao: 2022,
          anoModelo: 2021,
          cambio: "Automático",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          marca: "Ford",
          modelo: "Territory",
          cor: "Preto",
          anoFabricacao: 2022,
          anoModelo: 2022,
          cambio: "Manual",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          marca: "Fiat",
          modelo: "Estrada",
          cor: "Vermelho",
          anoFabricacao: 2021,
          anoModelo: 2020,
          cambio: "Manual",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
