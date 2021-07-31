import { CONFLICT } from 'http-status';
import { ERROR_CODE } from '../../../common/enum';
import { HttpException } from './base';

export class DuplicateException extends HttpException {
    constructor(msg = 'Duplicate record') {
        super(msg, ERROR_CODE.DUPLICATE, CONFLICT);
    }
}
