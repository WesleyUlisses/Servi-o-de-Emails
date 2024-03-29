import { EnqueueEmailController } from '../controllers/Controllers';
import { Router } from 'express';

const router = Router();
const enqueueEmailController = new EnqueueEmailController();

router.post('/enqueue', enqueueEmailController.enqueueEmail);

export default router;