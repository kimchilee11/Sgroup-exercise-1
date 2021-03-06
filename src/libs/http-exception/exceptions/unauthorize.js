import { UNAUTHORIZED } from 'http-status';
import { ERROR_CODE } from '../../../common/enum';
import { HttpException } from './base';

export class UnAuthorizedException extends HttpException {
    constructor(msg = 'You need to sign in') {
        super(msg, ERROR_CODE.TOKEN_INVALID, UNAUTHORIZED);
    }
}
