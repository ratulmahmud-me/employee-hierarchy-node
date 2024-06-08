import { checkValidationSchema } from "../middlewares/handleValidation";
import { getEmployeeHierarchy } from "../models/data-model/employee.model";
import employeeReqModel from "../models/request-model/employee-req.model";

export const employeeHierarchy = async (req, res, next) => {
    try {
        const id = req.query.id;
        // validating data 
        const schema = employeeReqModel.getEmployeeHierarchyReq;
        await checkValidationSchema(schema, { id });

        const employee = await getEmployeeHierarchy(id);
        return res.status(200).json({
            responseData: employee,
            responseMessage: "Showing employee heirarchy."
        });
    } catch (error) {
        return next(error, req, res);
    }
}