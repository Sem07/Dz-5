const { BAD_REQUEST, UNAUTHORIZED, FORBIDDEN } = require('../configs/status-codes');

module.exports = {
    NOT_VALID_ID: {
        massage: 'User id not valid',
        code: BAD_REQUEST
    },
    NOT_VALID_BODY: {
        massage: 'Wrong data',
        code: FORBIDDEN
    },
    USER_ALREADY_CREATED: {
        massage: 'User already created',
        code: UNAUTHORIZED
    },
    USER_NOT_CREATED: {
        massage: 'User not created',
        code: BAD_REQUEST
    },
    USER_EMAIL_SHORT: {
        massage: 'User email must > 0',
        code: BAD_REQUEST
    }
};
