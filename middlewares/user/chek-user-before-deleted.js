const { ErrorHandler, errors } = require('../../error');
const { userServices } = require('../../serrvice');

module.exports = (req, res, next) => {
    try {
        const { email } = req.params;

        if (email.length < 0) {
            throw new ErrorHandler(errors.USER_EMAIL_SHORT.massage, errors.USER_EMAIL_SHORT.code);
        }
        next();
    } catch (e) {
        next(e);
    }
};
