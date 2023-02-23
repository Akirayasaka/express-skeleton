import express from 'express';
import * as demo from '../controllers/demo';

const router = express.Router();

router.get('/getList', demo.getAllProduct);
router.post('/get', demo.getProductById);

export default router;
