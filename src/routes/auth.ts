import express from 'express';

const router = express.Router();

router.post('/register');
router.post('/login');
router.post('/logout');
router.post('/forgetPassword');

export default router;
