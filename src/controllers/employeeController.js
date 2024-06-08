import { checkValidationSchema } from "../middlewares/handleValidation";
import { getEmployeeHierarchy, getEmployeeHierarchyBatch } from "../models/data-model/employee.model";
import employeeReqModel from "../models/request-model/employee-req.model";

export const employeeHierarchy = async (req, res, next) => {
    try {
        const id = req.query.id;
        // validating data 
        const schema = employeeReqModel.getEmployeeHierarchyReq;
        checkValidationSchema(schema, { id });

        const employee = await getEmployeeHierarchy(id);
        return res.status(200).json({
            responseData: employee,
            responseMessage: "Showing employee heirarchy."
        });
    } catch (error) {
        return next(error, req, res);
    }
}

export const employeeHierarchyBatch = async (req, res, next) => {
    try {
        const data = req.query;
        // const data = {...req.body, id};
        // validating data 
        const schema = employeeReqModel.getEmployeeHierarchyReqBatch;
        checkValidationSchema(schema, data);

        const employee = await getEmployeeHierarchyBatch(data);
        return res.status(200).json({
            responseTotal: employee.total,
            responseData: employee.root,
            responseMessage: "Showing employee heirarchy."
        });
    } catch (error) {
        return next(error, req, res);
    }
}