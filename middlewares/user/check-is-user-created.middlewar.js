const { ErrorHandler, errors } = require('../../error');
const { userServices } = require('../../serrvice');

module.exports = (req, res, next) => {
    try {
        const { email } = req.body;

        const user = userServices.getUserByEmail(email);

        if (user) {
            throw new ErrorHandler(errors.USER_ALREADY_CREATED.massage, errors.USER_ALREADY_CREATED.code);
        }
        next();
    } catch (e) {
        next(e);
    }
};
