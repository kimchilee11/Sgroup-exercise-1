import express from 'express';
import { AuthController } from './auth.controllers';
import { LoginValidator, RegisterValidator } from './validator';

const router = express.Router();

router.post('/login', LoginValidator, AuthController.getSingleton().login);
router.post('/register', RegisterValidator, AuthController.getSingleton().register);

export const authRouter = router;
