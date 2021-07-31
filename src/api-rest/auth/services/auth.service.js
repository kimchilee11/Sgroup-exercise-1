import { UserService } from '../../users/user.service';
import { UnAuthorizedException } from '../../../libs/http-exception/exceptions';
import { logger } from '../../../common/utils';
import { jwtPayload } from '../dto/jwt-payload';
import { profileResponse } from '../dto/profile-response';
import { BcryptService } from './bcrypt.service';
import { JwtService } from './jwt.service';

export class AuthService {
    /**
     * @type {AuthService}
     */
    static #instance;

    static getSingleton() {
        if (!AuthService.#instance) {
            AuthService.#instance = new AuthService(
                BcryptService.getSingleton(),
                JwtService.getSingleton(),
                UserService.getSingleton(),
            );
            logger.info(`[${AuthService.name}] is bundling`);
        }
        return AuthService.#instance;
    }

    /**
     * @type {JwtService}
     */
    #jwtService;

    /**
     * @type {BcryptService}
     */
    #bcryptService;

    /**
     * @type {UserService}
     */
    #userService;

    constructor(bcrytService, jwtService, userService) {
        this.#bcryptService = bcrytService;
        this.#jwtService = jwtService;
        this.#userService = userService;
    }

    async login(body) {
        const user = await this.#userService.getByUsernameWithRoles('KC');

        const comparePassword = this.#bcryptService.compare(body.password, user.password);
        if (!comparePassword) {
            throw new UnAuthorizedException('Username or password is incorrect');
        }
        return profileResponse(user, this.#jwtService.sign(jwtPayload(user.id, user.roles)));
    }

    async register(body) {
        body.password = this.#bcryptService.hash(body.password);
        const userId = await this.#userService.createOne(body);
        return profileResponse(
            {
                id: userId,
                body
            },
            this.#jwtService.sign(jwtPayload(userId, 'USER')),
        );
    }
}
