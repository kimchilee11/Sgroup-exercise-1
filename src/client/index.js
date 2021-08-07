import express from 'express';
import { homePageRouter } from './private/home';
import { userPageRouter } from './private/user';

const router = express.Router();

router.use('/users', userPageRouter);
router.use('/', homePageRouter);

export const clientRouter = router;
