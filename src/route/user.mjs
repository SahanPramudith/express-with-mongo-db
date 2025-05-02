import express from 'express'
import {getUser,createUser} from "../controller/user.mjs";

const router=express.Router();

router.get('/getuser',getUser);
router.post('/createuser',createUser);

export default router;