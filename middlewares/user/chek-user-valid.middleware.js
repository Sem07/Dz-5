const { ErrorHandler, errors } = require('../../error');

module.exports = (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new ErrorHandler(errors.NOT_VALID_BODY.massage, errors.NOT_VALID_BODY.code);
        }
        next();
    } catch (e) {
        next(e);
    }
};
