import { INTERNAL_SERVER_ERROR } from 'http-status';
import { ERROR_CODE } from '../../../common/enum';
import { HttpException } from './base';

export class InternalServerException extends HttpException {
    constructor(msg = 'Internal server error') {
        super(msg, ERROR_CODE.INTERNAL, INTERNAL_SERVER_ERROR);
    }
}
