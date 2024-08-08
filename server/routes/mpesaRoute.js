import express from 'express';
import { callback, generateToken, stkpush} from '../controllers/mpesaController.js';


const router = express.Router();


router.post('/callback',callback);
router.post('/mpesa/stkpush', generateToken,stkpush);
// router.get('/token',token)

export default router;