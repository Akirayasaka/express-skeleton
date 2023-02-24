import express from 'express';
import * as auth from '@src/controllers/auth';

const router = express.Router();

router.post('/register', auth.register);
router.post('/login');
router.post('/logout');
router.post('/forgetPassword');

export default router;
