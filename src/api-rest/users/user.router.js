import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/', UserController.getSingleton().getAll);

export const userRouter = router;
