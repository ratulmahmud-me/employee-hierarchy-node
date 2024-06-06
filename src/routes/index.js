import { Router } from "express";
import EmployeeRoute from "./employeeRoutes";

const router = Router();

router.use("/api/employee", EmployeeRoute);

export default router;