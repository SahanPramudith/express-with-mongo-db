import express from 'express'
import { getUser, createUser } from "../controller/user.mjs";

const router = express.Router();

router.get('/getUser', getUser);
router.post('/createUser', createUser);

export default router;