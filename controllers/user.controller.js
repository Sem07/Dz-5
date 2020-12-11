const { userServices } = require('../serrvice');
const { CREATED, NO_CONTENT } = require('../configs/status-codes');

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const users = await userServices.getUsers();

            res.json(users);
        } catch (e) {
            next(e);
        }
    },

    createUser: async (req, res, next) => {
        try {
            const user = req.body;

            const newUser = await userServices.createUser(user);

            res.status(CREATED).json(newUser);
        } catch (e) {
            next(e);
        }
    },

    getOneUsers: async (req, res, next) => {
        try {
            const { userId } = req.params;

            const user = await userServices.getUserById(userId);

            res.json(user);
        } catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const { email } = req.params;

            if (email.length < 0) {
                throw new Error('User email must > 0');
            }
            const user = await userServices.deletedUser(email);

            if (!user) {
                throw new Error('User not created');
            }
            res.status(NO_CONTENT).json('User delete');
        } catch (e) {
            next(e);
        }

        res.json('user delete');
    },

    updateUser: async (req, res, next) => {
        try {
            const updateUser = req.body;
            const { id } = req.params;

            const db = await userServices.updateUser(id, updateUser);

            res.status(CREATED).json(db);
        } catch (e) {
            next(e);
        }
    },
};
