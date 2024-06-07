import { getEmployeeHierarchy } from "../models/data-model/employee.model";

export const employeeHierarchy = async (req, res, next) => {
    try {
        const id = req.query.id;
        // console.log("ID====", id);
        const employee = await getEmployeeHierarchy(id);
        return res.status(200).json({
            responseData: employee,
            responseMessage: "Showing employee heirarchy."
        });
    } catch (error) {
        return next(error, req, res);
    }
}