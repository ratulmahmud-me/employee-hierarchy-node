import { Router } from "express";
import EmployeeRoute from "./employeeRoutes";
import AuthRoute from "./authRouter";

const router = Router();

router.use("/api/employee", EmployeeRoute);
router.use("/api/auth", AuthRoute);

export default router;