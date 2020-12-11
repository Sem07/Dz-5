module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('user', [{
            login: 'Max',
            email: 'Max@gmail.com',
            password: '123456'
        }]);
        await queryInterface.bulkInsert('car', [{
            model: 'BMW',
            price: 20500,
            year: 2007,
            user_id: 1
        }]);
    },

    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('user', null, {});
      await queryInterface.bulkDelete('car', null, {});
    }
};
