import { Router } from "express";
import { employeeHierarchy } from "../controllers/employeeController";

const router = Router();

router.get("/hierarchy/:id", employeeHierarchy);

export default router;