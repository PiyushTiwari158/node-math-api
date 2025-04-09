import { Router } from 'express';
const router = Router();
import { addition, factorial, fibonacci, square } from '../controllers/math-controller';

router.post('/addition', addition);
router.get('/factorial/:number', factorial);
router.get('/fibonacci/:count', fibonacci);
router.get('/square/:number', square);

export default router;