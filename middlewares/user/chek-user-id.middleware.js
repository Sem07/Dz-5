const { ErrorHandler, errors } = require('../../error');

module.exports = (req, res, next) => {
    try {
        const { id } = req.params;

        if (id < 0 || !id) {
            throw new ErrorHandler(errors.NOT_VALID_ID.massage, errors.NOT_VALID_ID.code);
        }
        next();
    } catch (e) {
        next(e);
    }
};
