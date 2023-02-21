import express from 'express';
import * as demo from '../controllers/demo';

const router = express.Router();

router.get('/getList', demo.getAllProduct);
router.get('/get', demo.getProductById);

export default router;
