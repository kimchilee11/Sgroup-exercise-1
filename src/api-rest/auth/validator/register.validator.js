import { BAD_REQUEST } from 'http-status';
import Joi from 'joi';
import { ERROR_CODE } from '../../../common/enum';

export function RegisterValidator(req, res, next) {
    const schema = Joi.object({
        username: Joi.string().required(),
        fullName: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
    });

    const result = schema.validate(req.body);
    if (result.error) {
        return res.status(BAD_REQUEST).json({
            code: ERROR_CODE.BAD_REQUEST,
            message: result.error,
        });
    }

    return next();
}
