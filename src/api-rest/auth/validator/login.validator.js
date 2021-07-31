import { BAD_REQUEST } from 'http-status';
import Joi from 'joi';

export function LoginValidator(req, res, next) {
    const schema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string(),
    });

    const result = schema.validate(req.body);

    if (result.error) {
        return res.status(BAD_REQUEST).json({
            code: BAD_REQUEST,
            message: result.error,
        });
    }

    return next();
}
