import { Router } from "express";
import { employeeHierarchy, employeeHierarchyBatch } from "../controllers/employeeController";

const router = Router();

router.get("/hierarchy", employeeHierarchy);
router.get("/hierarchy/batch", employeeHierarchyBatch);

export default router;