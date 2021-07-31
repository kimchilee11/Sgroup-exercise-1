import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { ConfigService } from '../../../libs/config/config.service';
import { logger } from '../../../common/utils';

export class BcryptService {
    /**
     * @type {BcryptService}
     */
    static #instance;

    static getSingleton() {
        if (!BcryptService.#instance) {
            BcryptService.#instance = new BcryptService(
                Number.parseInt(ConfigService.getSingleton().get('SALT_ROUNDS'), 10)
            );
            logger.info(`[${BcryptService.name}] is bundling`);
        }
        return BcryptService.#instance;
    }

    saltRounds;

    /**
     * @param {number} saltRounds
     */
    constructor(saltRound) {
        this.saltRounds = saltRound;
    }

    compare(str, hashed) {
        return compareSync(str, hashed);
    }

    hash(str) {
        const salt = genSaltSync(this.saltRounds);
        return hashSync(str, salt);
    }
}
