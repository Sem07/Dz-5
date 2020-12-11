const { Router } = require('express');

const { usersControllers } = require('../controllers');
const { usersMiddlewares } = require('../middlewares');

const userRouter = Router();

userRouter.get('/', usersControllers.getAllUsers);

userRouter.get('/:id', usersMiddlewares.checkId, usersMiddlewares.checkUserById, usersControllers.getOneUsers);

userRouter.post('/', usersMiddlewares.checkUserValid, usersMiddlewares.checkIsUserCreated, usersControllers.createUser);

userRouter.put('/:id', usersMiddlewares.checkId, usersControllers.updateUser);

userRouter.delete('/:email', usersMiddlewares.checkIsUserCreated, usersMiddlewares.chekUserBeforeDeleted, usersControllers.deleteUser);

module.exports = userRouter;

// usersMiddlewares.checkUsers,
