import Joi from "joi";

const getEmployeeHierarchyReq = Joi.object().keys({
    id: Joi.number().integer().required()
});

export default {
    getEmployeeHierarchyReq
}