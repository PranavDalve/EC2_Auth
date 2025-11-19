import { Router } from "express";
import { register, login } from "../controllers/authController";
import { userView } from "../controllers/authController";

const router = Router();

router.get("/", userView)
router.post("/register", register);
router.post("/login", login);

export default router;