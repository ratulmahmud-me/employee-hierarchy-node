import { getEmployeeHierarchy } from "../models/data-model/employee.model";

export const employeeHierarchy = async (req, res, next) => {
    const id = req.query.id;
    console.log(id);
    const employee = await getEmployeeHierarchy(id);
    return res.status(200).json({
        responseData: employee,
        responseMessage: "Hello from employee!"
    });
}