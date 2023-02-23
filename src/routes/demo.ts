import express from 'express';
import { contentType } from '../middlewares/request/checkHeaders';
import * as demo from '../controllers/demo';

const router = express.Router();

router.get('/getList', demo.getAllProduct);
router.post('/get', contentType('application/json'), demo.getProductById);

export default router;
