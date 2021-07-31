import { DuplicateException } from '../../libs/http-exception/exceptions';
import { logger } from '../../common/utils';
import { UserRepository } from './user.repository';

export class UserService {
    /**
     * @type {UserService}
     */
    static #instance;

    static getSingleton() {
        if (!UserService.#instance) {
            UserService.#instance = new UserService(UserRepository.getSingleton());
            logger.info(`[${UserService.name}] is bundling`);
        }
        return UserService.#instance;
    }

    /**
     * @type {UserRepository}
     */
    #userRepository;

    constructor(userRepository) {
        this.#userRepository = userRepository;
    }

    async createOne(user) {
        try {
            return await this.#userRepository.createOne(user);
        } catch (error) {
            throw new DuplicateException(`username ${user.username} is existed`);
        }
    }

    async getByUsernameWithRoles(username) {
        const users = await this.#userRepository.getOneBy('username', username)
                    .leftJoin('users_roles', 'users_roles.user_id', '=', 'users.id')
                    .innerJoin('roles', 'roles.id', '=', 'users_roles.role_id');

        const result = users[0];
        result.roles = [];

        users.forEach(user => {
            result.roles.push({
                id: user.user_id,
                role: user.name,
            });
        });

        delete result.name;
        delete result.user_id;
        delete result.role_id;

        return result;
    }
}
