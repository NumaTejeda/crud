import express from 'express';
import viewRoutes from './viewRoutes.js';
import crudRoutes from './crudRoutes.js';

const router = express.Router();

router.use('/', viewRoutes);
router.use('/api', crudRoutes);

export default router;
