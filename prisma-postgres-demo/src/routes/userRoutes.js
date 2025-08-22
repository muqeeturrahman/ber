import express from 'express';
import { createUser, getUsers } from '../controllers/userController.js';
const router = express.Router();

router.post('/createUser', createUser);
router.get('/getUsers', getUsers);

export default router;
