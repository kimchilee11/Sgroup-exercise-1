import { OK } from 'http-status';
import { logger } from '../../common/utils';
// import { httpExceptionHandler } from 'libs/http-exception/handler/exception.handler';
import { UserService } from './user.service';

export class UserController {
    /**
     * @type {UserController}
     */
    static #instance;

    static getSingleton() {
        if (!UserController.#instance) {
            UserController.#instance = new UserController(UserService.getSingleton());
            logger.info(`[${UserController.name}] is bunlding`);
        }
        return UserController.#instance;
    }

    /**
     * @type {UserService}  
     */
    #userService;

    constructor(userService) {
        this.#userService = userService;
    }

    getAll = async (req, res) => {
        const perPage = 10;
        const page = req.query.page || 1;
        const data = await this.#userService.getAll(perPage, page);
        return res.status(OK).json({
            data,
            totalRecord: 10,
            totalPage: 5,
        });
    }
}
