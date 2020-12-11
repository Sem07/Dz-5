module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('user', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            login: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            }
        });

        await queryInterface.createTable('car', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            model: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
            },
            year: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
            },
            user_id: {
                type: Sequelize.DataTypes.INTEGER,
                foreignKey: true,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id'
                }
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('car');

        await queryInterface.dropTable('user');
    }
};
