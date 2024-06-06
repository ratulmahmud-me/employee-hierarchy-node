import { Router } from "express";
import { employeeHierarchy } from "../controllers/employeeController";

const router = Router();

router.get("/hierarchy", employeeHierarchy);

export default router;