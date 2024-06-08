import { Router } from "express"
import { getRoommates, addRoommate } from "../controllers/roommate.controller.js"

const router = Router()

router.get('/roommates', getRoommates)

router.post('/roommate', addRoommate)

export default router