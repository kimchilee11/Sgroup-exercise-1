import { decode, sign } from 'jsonwebtoken';
import { logger } from '../../../common/utils';
import { ConfigService } from '../../../libs/config/config.service';

export class JwtService {
    /**
     * @type {JwtService}
     */
    static #instance;

    static getSingleton() {
        if (!JwtService.#instance) {
            JwtService.#instance = new JwtService(
                ConfigService.getSingleton().get('JWT_SECRET'),
                ConfigService.getSingleton().get('EXPIRE_INS')
            );
            logger.info(`[${JwtService.name}] is bundling `);
        }
        return JwtService.#instance;
    }

    constructor(secrect, expiresIn) {
        this.secrect = secrect;
        this.expiresIn = expiresIn;
    }

    sign(payload) {
        return sign(payload, this.secrect, {
            expiresIn: this.expiresIn
        });
    }

    decode(token) {
        return decode(token);
    }
}
