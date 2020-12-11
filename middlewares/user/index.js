module.exports = {
    checkUserValid: require('./chek-user-valid.middleware'),
    checkIsUserCreated: require('./check-is-user-created.middlewar'),
    checkUserById: require('./check-is-user-created-by-id.middlewar'),
    checkId: require('./chek-user-id.middleware'),
    chekUserBeforeDeleted: require('./chek-user-before-deleted'),
};
