import express from 'express';
import {signup, login} from '../controllers/authController.js';
import { requireAuth } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/protected', requireAuth, (req, res) => {
  res.status(200).json({ message: 'Access granted' });
});

export default router;
