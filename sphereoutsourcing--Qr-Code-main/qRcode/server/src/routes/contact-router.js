import express from 'express';
import contactRateLimiter from '../middlewares/rateLimiter.js';
import contactForm from '../controllers/contact-controller.js';

const router = express.Router();

router.post('/contact', contactRateLimiter, contactForm);

export default router;
