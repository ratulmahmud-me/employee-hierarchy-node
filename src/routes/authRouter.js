import { Router } from "express";
import { employeeHierarchy } from "../controllers/employeeController";
import { handleAuth } from "../middlewares/handleAuth";
import { authProtection } from "../controllers/authController";

const router = Router();

router.get("/protected", handleAuth, authProtection);

export default router;